import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice";

// Redux store configuration
const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default store;