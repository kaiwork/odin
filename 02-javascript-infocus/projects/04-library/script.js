// Library
const myLibrary = [];

function Book( author, title, noPages, isRead ) {
  // the constructor...
  this.id = crypto.randomUUID();
  this.author = author;
  this.title = title;
  this.noPages = noPages;
  this.isRead = isRead;
  this.toggleReadBook = function(){
    this.isRead = !this.isRead;
  }
}

function addBookToLibrary(author, title, noPages, isRead) {
  // take params, create a book then store it in the array
  const book = new Book(author, title, noPages, isRead);
  myLibrary.push(book);
  displayBooks();
}
function displayBooks() {
  const container = document.getElementById('library-container');
  
  // Safety check: Make sure the container actually exists in your HTML
  if (!container) {
    console.error("Error: #library-container element not found in HTML!");
    return;
  }

  // Clear current display
  container.innerHTML = ''; 

  // Safety check: Make sure myLibrary is an array and has items
  if (!Array.isArray(myLibrary)) return;

  myLibrary.forEach((book, index) => {
    // Optional safeguard incase a bad object gets pushed into the array
    if (!book) return;

    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    
    // Attach the data attribute
    bookCard.dataset.id = book.id; 

    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.noPages}</p>
      <p>Read: ${book.isRead ? 'Yes' : 'No'}</p>
      <button class="toggle-btn" data-id="${book.id}">Toggle Read</button>
      <button class="delete-btn" data-id="${book.id}">Delete</button>
    `;

    container.appendChild(bookCard);
  });
}

// Handle Form Submission
const form = document.getElementById('book-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const author = form.elements['author'].value;
  const title = form.elements['title'].value;
  const noPages = form.elements['noPages'].value;
  const isRead = form.elements['isRead'].checked;

  addBookToLibrary(author, title, noPages, isRead);
  form.reset();
});
// Bulletproof Event Delegation using .closest()
document.getElementById('library-container').addEventListener('click', (e) => {
  // Find the closest button or card that has a data-id
  const deleteBtn = e.target.closest('.delete-btn');
  const toggleBtn = e.target.closest('.toggle-btn');

  if (deleteBtn) {
    const targetId = deleteBtn.dataset.id;
    const bookIndex = myLibrary.findIndex(book => book.id === targetId);
    if (bookIndex !== -1) {
      myLibrary.splice(bookIndex, 1);
      displayBooks();
    }
  } else if (toggleBtn) {
    const targetId = toggleBtn.dataset.id;
    const bookIndex = myLibrary.findIndex(book => book.id === targetId);
    if (bookIndex !== -1) {
      myLibrary[bookIndex].toggleReadBook();
      displayBooks();
    }
  }
});