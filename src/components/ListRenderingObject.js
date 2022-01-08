import React from "react";

export default function ListRenderingObject() {
  let emplist = [
    {
      name: "surya",
      rollno: 535,
      email: "surya@gmail.com",
    },
    {
      name: "venkat",
      rollno: 536,
      email: "venkat@gmail.com",
    },
    {
      name: "veera",
      rollno: 538,
      email: "veera@gmail.com",
    },
  ];
  return (
    <div>
      <h1>List Rendering</h1>
      {emplist.map((empdata) => (
        <>
          <p>{empdata.name}</p>
          <p>{empdata.rollno}</p>
          <p>{empdata.email}</p>
        </>
      ))}
    </div>
  );
}
