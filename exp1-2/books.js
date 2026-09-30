let books = ["Wings of Fire", "Atomic Habits", "The Alchemist"];

const list = document.getElementById("bookList");
const input = document.getElementById("bookInput");
const count = document.getElementById("bookCount");

// arrow function to show all books
const showBooks = () => {
  list.innerHTML = "";

  books.forEach((book, i) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
      <span>${book}</span>
      <div>
        <button class="btn btn-sm btn-warning" onclick="editBook(${i})">Edit</button>
        <button class="btn btn-sm btn-danger" onclick="deleteBook(${i})">Delete</button>
      </div>`;
    list.appendChild(li);
  });

  count.innerText = `Total books: ${books.length}`;
};

// arrow function with popup (prompt)
const editBook = (i) => {
  const newName = prompt("Enter new name for the book:", books[i]);
  if (newName !== null && newName.trim() !== "") {
    books[i] = newName.trim();
    showBooks();
  }
};

// arrow function with popup (confirm)
const deleteBook = (i) => {
  const ok = confirm("Delete " + books[i] + "?");
  if (ok) {
    books = books.filter((b, index) => index !== i);
    showBooks();
  }
};

// anonymous function as event handler
document.getElementById("addBtn").addEventListener("click", function () {
  const name = input.value.trim();

  if (name === "") {
    alert("Please enter a book name");
    return;
  }

  books.push(name);
  input.value = "";
  showBooks();
});

// pressing Enter also adds the book
input.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    document.getElementById("addBtn").click();
  }
});

document.getElementById("clearBtn").addEventListener("click", () => {
  if (books.length === 0) {
    alert("No books to clear");
  } else if (confirm("Remove all books?")) {
    books = [];
    showBooks();
  }
});

showBooks();