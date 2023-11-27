import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley />;
}

function Smiley({ isHappy }) {
  return (
    <div>{isHappy ? <span>happy emoji</span> : <span>sad emoji</span>}</div>
  );
}
