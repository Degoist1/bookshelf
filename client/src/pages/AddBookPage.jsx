import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddBook from "../components/AddBook";

function AddBookPage(props) {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Add Book";
  }, []);

  function handleAdd(title, author) {
    props.onAdd(title, author);
    navigate("/books");
  }

  return (
    <div>
      <h2>Add a Book</h2>
      <AddBook onAdd={handleAdd} />
    </div>
  );
}

export default AddBookPage;