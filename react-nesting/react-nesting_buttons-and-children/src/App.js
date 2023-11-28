import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>submit</Button>
      <Button>press</Button>
      <Button>close</Button>
      <Button>cancel</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
