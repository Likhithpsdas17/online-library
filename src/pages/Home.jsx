import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";

function Home() {
  const books = useSelector((state) => state.books);

  return (
    <div className="page">
      <h1>Welcome to Online Library</h1>

      <h2>Categories</h2>

        <div className="categories">
            <a href="/books/Fiction" className="category-btn">
                Fiction
            </a>

            <a href="/books/Non-Fiction" className="category-btn">
                Non-Fiction
            </a>

            <a href="/books/Sci-Fi" className="category-btn">
                Sci-Fi
            </a>
        </div>

      <h2>Popular Books</h2>

      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Home;