import BookCard from "./BookCard";

function BookList(props) {
  if (props.books.length === 0) {
    return <p>No books yet. Add one above.</p>;
  }

  return (
    <div>
      {props.books.map((book) => (
        <BookCard
          key={book._id}
          title={book.title}
          author={book.author}
          onDelete={() => props.onDelete(book._id)}
        />
      ))}
    </div>
  );
}

export default BookList;