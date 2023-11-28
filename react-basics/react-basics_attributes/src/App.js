import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">This is a heading</h2>
      <label id="label" htmlFor="html"></label>
      <input id="label" htmlFor="html" />
      <a className="article__link" href="https://www.spiced-academy.com/en">
        click here
      </a>
    </article>
  );
}
