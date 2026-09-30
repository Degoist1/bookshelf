import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Books from "./pages/Books";
import AddBookPage from "./pages/AddBookPage";
import Register from "./pages/Register";
import "./App.css";

const API = import.meta.env.VITE_API_URL || "http://localhost:3000/books";

function App() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");

  // load books from the server when the app starts
  useEffect(() => {
    axios
      .get(API)
      .then((res) => {
        setBooks(res.data);
        setError("");
      })
      .catch((err) => {
        console.log(err);
        setError("Could not load books. Is the server running?");
      });
  }, []);

  function addBook(title, author) {
    axios
      .post(API, { title: title, author: author })
      .then((res) => {
        setBooks([...books, res.data]);
      })
      .catch((err) => {
        console.log(err);
        alert("Could not add the book");
      });
  }

  function deleteBook(id) {
    axios
      .delete(API + "/" + id)
      .then(() => {
        setBooks(books.filter((b) => b._id !== id));
      })
      .catch((err) => {
        console.log(err);
        alert("Could not delete the book");
      });
  }

  return (
    <div className="app">
      <Navbar />
      {error && <p className="error">{error}</p>}
      <Routes>
        <Route path="/" element={<Home total={books.length} />} />
        <Route path="/books" element={<Books books={books} onDelete={deleteBook} />} />
        <Route path="/add" element={<AddBookPage onAdd={addBook} />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h2>404 - Page not found</h2>} />
      </Routes>
    </div>
  );
}

export default App;