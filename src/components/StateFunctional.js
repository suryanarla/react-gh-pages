import React, { useState } from "react";

export default function StateFunctional() {
  let [name, updateName] = useState("Venkat");
  return (
    <div>
      <h1
        onMouseOver={() => {
          updateName("Venkat narla");
        }}
        onMouseLeave={() => {
          updateName("Venkat Narayana");
        }}
      >
        {name}
      </h1>
    </div>
  );
}
