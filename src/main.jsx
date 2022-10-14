import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import GlobalStyles from "./components/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />

    <BrowserRouter>
      <Routes>
        <Route path="/:planetParam" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
