import React from "react";

export default function ListRendering() {
  let emplist = ["venkata", "surya", "narayana", "narla"];
  return (
    <div>
      <h1>List Rendering</h1>

      {emplist.map((element) => (
        <h1>{element}</h1>
      ))}
    </div>
  );
}
