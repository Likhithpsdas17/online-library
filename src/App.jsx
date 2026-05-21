import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

function App() {

  const location = useLocation();

  // This checks whether current page is invalid
  const isNotFoundPage =
    ![
      "/",
      "/browse",
      "/add-book",
    ].includes(location.pathname) &&
    !location.pathname.startsWith("/books/") &&
    !location.pathname.startsWith("/book/");

  return (
    <div>

      {/* Navbar hidden on 404 page */}
      {!isNotFoundPage && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/browse" element={<BrowseBooks />} />

        <Route
          path="/books/:category"
          element={<BrowseBooks />}
        />

        <Route
          path="/book/:id"
          element={<BookDetails />}
        />

        <Route
          path="/add-book"
          element={<AddBook />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;