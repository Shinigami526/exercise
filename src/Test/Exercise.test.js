import React from "react";
import ReactDOM from "react-dom";
import App from "../Exercise/container/App";
import Exercise from "../Exercise/components/exercise";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders Exercise", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Exercise />, div);
  ReactDOM.unmountComponentAtNode(div);
});
