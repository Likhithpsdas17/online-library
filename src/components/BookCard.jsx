import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <div className="card">
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Category: {book.category}</p>

      <Link to={`/book/${book.id}`}>
        View Details
      </Link>
    </div>
  );
}

export default BookCard;