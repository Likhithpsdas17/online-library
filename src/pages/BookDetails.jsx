import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {
  const { id } = useParams();

  const books = useSelector((state) => state.books);

  const book = books.find((book) => book.id === Number(id));

  if (!book) {
    return <h2>Book not found</h2>;
  }

  return (
    <div className="details-card">
      <h1>{book.title}</h1>

      <p>Author: {book.author}</p>

      <p>Description: {book.description}</p>

      <p>Rating: {book.rating}</p>

      <Link to="/browse">
        Back to Browse
      </Link>
    </div>
  );
}

export default BookDetails;