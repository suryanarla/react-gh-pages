import React from "react";
import Andhra from "./Andhra";
import Corporate from "./Corporate";

export default function Union() {
  return (
    <div>
      <h1>Union bank</h1>
      <Andhra location="kavali" />
      <Corporate location="kakinada" />
    </div>
  );
}
