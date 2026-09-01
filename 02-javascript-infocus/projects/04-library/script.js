// Library
const myLibrary = [];

class Book {
    constructor(title, author, pages, read=false) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    toggleRead() {
        this.read = !this.read;
    }
}

const showAddBookDialogButton = document.getElementById('show-add-book-dialog');
const addBookDialog = document.getElementById('add-book-dialog');

showAddBookDialogButton.addEventListener('click', () => {
    addBookDialog.showModal();
});

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayBooks(){
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';
    myLibrary.forEach(book => {
        const li = document.createElement('li');
        const details = document.createElement('span');
        const readButton = document.createElement('button');

        details.textContent = `${book.title} by ${book.author}, ${book.pages} pages , read: ${book.read ? 'Yes' : 'No'}`;
        readButton.type = 'button';
        readButton.dataset.bookId = book.id;
        readButton.textContent = book.read ? 'Mark unread' : 'Mark read';

        readButton.addEventListener('click', () => {
            const bookToUpdate = myLibrary.find((libraryBook) => {
                return libraryBook.id === readButton.dataset.bookId;
            });

            bookToUpdate.toggleRead();
            displayBooks();
        });

        li.append(details, readButton);
        bookList.appendChild(li);
    });
}

const addBookForm = document.getElementById('add-book-form');

addBookForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = Number(document.getElementById('pages').value);
    const read = document.getElementById('read').checked;

    addBookToLibrary(title, author, pages, read);
    displayBooks();

    addBookForm.reset();
    addBookDialog.close();
});