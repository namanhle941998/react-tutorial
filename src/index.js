import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    author: "Some author",
    title: "Book 1",
    img: "https://images-na.ssl-images-amazon.com/images/I/81ytGlIkLoL._AC_UL600_SR600,400_.jpg",
  },
  {
    author: "Some author",
    title: "Book 1",
    img: "https://images-na.ssl-images-amazon.com/images/I/81ytGlIkLoL._AC_UL600_SR600,400_.jpg",
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author } = book;
        return <Book key={title} img={img} title={title} author={author} />;
      })}
    </section>
  );
};

const author = "Some author";
const title = "Book 1";
const img =
  "https://images-na.ssl-images-amazon.com/images/I/81ytGlIkLoL._AC_UL600_SR600,400_.jpg";
const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
