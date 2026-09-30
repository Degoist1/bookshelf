import { useState, useEffect } from "react";
import BookList from "../components/BookList";

function Books(props) {
  const [search, setSearch] = useState("");

  // runs again every time the number of books changes (like componentDidUpdate)
  useEffect(() => {
    document.title = "Books (" + props.books.length + ")";
  }, [props.books.length]);

  const shown = props.books.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>My Books</h2>
      <input
        type="text"
        placeholder="Search by title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <BookList books={shown} onDelete={props.onDelete} />
      <p>Total books: {props.books.length}</p>
    </div>
  );
}

export default Books;