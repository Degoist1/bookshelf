const express = require("express");
const Book = require("../models/Book");

const router = express.Router();

// get all books
router.get("/", async (req, res) => {
  const books = await Book.find();
  res.status(200).json(books);
});

// get one book by id
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.status(200).json(book);
  } catch (err) {
    res.status(400).json({ error: "Invalid book id" });
  }
});

// add a new book
router.post("/", async (req, res) => {
  const { title, author, year, pages } = req.body;

  if (!title || !author) {
    return res.status(400).json({ error: "Title and author are required" });
  }

  const book = new Book({ title, author, year, pages });
  await book.save();
  res.status(201).json(book);
});

// update a book
router.put("/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.status(200).json(book);
  } catch (err) {
    res.status(400).json({ error: "Invalid book id" });
  }
});

// delete a book
router.delete("/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted", book: book });
  } catch (err) {
    res.status(400).json({ error: "Invalid book id" });
  }
});

module.exports = router;