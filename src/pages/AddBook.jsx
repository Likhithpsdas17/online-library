import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // State for form inputs
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
  });

  const [error, setError] = useState("");

  // Handle form submission
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { title, author, category, description, rating } = formData;

    if (
    !title.trim() ||
    !author.trim() ||
    !category.trim() ||
    !description.trim() ||
    !rating
    ) {
      setError("All fields are required");
      return;
    }

    dispatch(
      addBook({
        id: Date.now(),
        ...formData,
      })
    );

    navigate("/browse");
  };

  return (
    <div>
      <h1>Add Book</h1>

      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          onChange={handleChange}
        />

        <input
          type="text"
          name="author"
          placeholder="Author"
          onChange={handleChange}
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />

        <input
          type="number"
          name="rating"
          placeholder="Rating"
          onChange={handleChange}
        />

        <button type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;