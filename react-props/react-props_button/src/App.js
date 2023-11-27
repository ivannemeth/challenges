import React from "react";
import "./styles.css";

export default function App() {
  return (
    <Button
      text="Submit"
      colorB="green"
      onClick={() => console.log("You clicked me!")}
    />
  );
}

function Button({ colorB, disabled, text, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        disabled={disabled}
        style={{ backgroundColor: colorB }}
      >
        {text}
      </button>
    </div>
  );
}
