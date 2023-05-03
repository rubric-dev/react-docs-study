import React from "react";
import ReactDOM from "react-dom/client";
import Week3 from "./3week/week3";
import Week2 from "./2week/week2";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Week3 />
    </BrowserRouter>
  </React.StrictMode>
);
