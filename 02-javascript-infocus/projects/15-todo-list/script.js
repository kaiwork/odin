// Todo List
class Todo {
  constructor(title, description, dueDate, priority) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }

  toJSON() {
    return { ...this };
  }
}

function saveTodo(title, description, dueDate, priority) {
  const todo = new Todo(title, description, dueDate, priority);
  const todoArr = JSON.parse(localStorage.getItem("todos")) || [];
  todoArr.push(todo.toJSON());
  localStorage.setItem("todos", JSON.stringify(todoArr));
}

function LoadTodos() {
  const todoJsons = localStorage.getItem("todos");
  if (!todoJsons) return [];

  const rawTodos = JSON.parse(todoJsons);
  const todos = [];
  for (const item of rawTodos) {
    const todo = new Todo(
      item.title,
      item.description,
      item.dueDate,
      item.priority,
    );
    todo.id = item.id;
    todo.completed = item.completed;
    todos.push(todo);
  }

  return todos;
}

// --- DOM & UI Logic ---

const todoForm = document.getElementById("todo-form");
const todoContainer = document.getElementById("todo-container");

// Function to display todos on the screen
function renderTodos() {
  todoContainer.innerHTML = ""; // Clear container before re-rendering
  const todos = LoadTodos();

  for (const todo of todos) {
    const todoCard = document.createElement("div");
    todoCard.classList.add("todo-card");
    if (todo.completed) todoCard.classList.add("completed");

    todoCard.innerHTML = `
      <h3>${todo.title}</h3>
      <p>${todo.description}</p>
      <p><small>Due: ${todo.dueDate} | Priority: ${todo.priority}</small></p>
      <p>Status: ${todo.completed ? "Done" : "Pending"}</p>
      <button class="toggle-btn">Toggle Complete</button>
    `;

    // Hook up the toggle button to use your class method
    const toggleBtn = todoCard.querySelector(".toggle-btn");
    toggleBtn.addEventListener("click", () => {
      todo.toggleCompleted();
      updateTodoInStorage(todo);
      renderTodos(); // Refresh the screen
    });

    todoContainer.appendChild(todoCard);
  }
}

// Helper to update a specific todo's completion status in localStorage
function updateTodoInStorage(updatedTodo) {
  let todos = LoadTodos();
  todos = todos.map(t => t.id === updatedTodo.id ? updatedTodo : t);
  const serialized = todos.map(t => t.toJSON());
  localStorage.setItem("todos", JSON.stringify(serialized));
}

// Listen for form submission to create new todos
todoForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page refresh

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const dueDate = document.getElementById("due-date").value;
  const priority = document.getElementById("priority").value;

  saveTodo(title, description, dueDate, priority);
  
  todoForm.reset(); // Clear form inputs
  renderTodos();    // Refresh UI
});

// Load and render todos immediately when the page opens
renderTodos();