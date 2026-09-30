function BookCard(props) {
  return (
    <div className="card">
      <div>
        <h3>{props.title}</h3>
        <p>{props.author}</p>
      </div>
      <button onClick={props.onDelete}>Delete</button>
    </div>
  );
}

export default BookCard;