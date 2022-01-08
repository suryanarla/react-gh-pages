import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Sample from "./components/Sample";
import Sampe3 from "./components/Sampe3";
import Dummy from "./components/Dummy";
import Union from "./components/Union";
import Stateclass from "./components/Stateclass";
import StateFunctional from "./components/StateFunctional";
import ListRendering from "./components/ListRendering";
import ListRenderingObject from "./components/ListRenderingObject";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Sample />
    <Sampe3 />
    <Dummy />
    <Union />
    <Stateclass />
    <StateFunctional />
    <ListRendering />
    <ListRenderingObject />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
