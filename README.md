# Online Library System

An Online Library System built using React, Redux Toolkit, React Router DOM, and Vite.

This application allows users to browse books, search books, view detailed information, and add new books dynamically.

---

# Features

- Home page with categories and popular books
- Browse books by category
- Dynamic routing using React Router
- Search books by title or author
- View complete book details
- Add new books using a form
- Redux Toolkit state management
- Form validation
- 404 Page Not Found handling
- Responsive and user-friendly UI

---

# Technologies Used

- React
- Vite
- React Router DOM
- Redux Toolkit
- React Redux
- JavaScript
- CSS

---

# Project Structure

```bash
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── BookCard.jsx
│   ├── Footer.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── BrowseBooks.jsx
│   ├── BookDetails.jsx
│   ├── AddBook.jsx
│   ├── NotFound.jsx
│
├── redux/
│   ├── store.js
│   ├── booksSlice.js
│
├── data/
│   ├── books.js
│
├── App.jsx
├── main.jsx
├── index.css
```

---

# Installation and Setup

## Step 1: Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

## Step 2: Open Project Folder

```bash
cd online-library
```

## Step 3: Install Dependencies

```bash
npm install
```

## Step 4: Run Development Server

```bash
npm run dev
```

---

# Application Routes

| Route | Description |
|---|---|
| / | Home Page |
| /browse | Browse Books |
| /books/:category | Filter Books by Category |
| /book/:id | Book Details Page |
| /add-book | Add New Book |
| * | 404 Page |

---

# Redux Functionality

Redux Toolkit is used to manage the global state of books.

Features implemented using Redux:

- Store book collection
- Add new books dynamically
- Update UI automatically after adding books

---

# Form Validation

The Add Book form validates:

- Empty fields
- Missing information
- Invalid submissions

---

# Future Improvements

- Backend integration
- User authentication
- Database storage
- Book ratings and reviews
- Dark mode support

---

# Author

Likhith P S Das

---

# GitHub Repository

Repository Link:

https://github.com/Likhithpsdas17/online-library.git