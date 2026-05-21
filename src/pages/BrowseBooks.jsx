import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import BookCard from "../components/BookCard";

function BrowseBooks() {
  const books = useSelector((state) => state.books);

  const { category } = useParams();

  const [search, setSearch] = useState("");

  // Filter books by category and search
  const filteredBooks = books.filter((book) => {
    const matchesCategory = category
      ? book.category.toLowerCase() === category.toLowerCase()
      : true;

    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <h1>Browse Books</h1>

      <input  className="search-box"
        type="text"
        placeholder="Search by title or author"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="books-grid">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}

      </div>
    </div>
  );
}

export default BrowseBooks;