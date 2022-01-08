import React from "react";
import "./App.css";

function App() {
  var a = "surya";
  var b = 20;
  return (
    <div>
      <h1>hello</h1>
      <p>paragraph data</p>
      <h2>{a}</h2>
      <p>{b + 2}</p>
    </div>
  );
}

export default App;
