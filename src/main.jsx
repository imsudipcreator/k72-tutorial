import { BrowserRouter, Route, Routes } from "react-router";
import { createRoot } from "react-dom/client";
import Projects from "./pages/Projects.jsx";
import Agency from "./pages/Agency.jsx";
import { StrictMode } from "react";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/agency" element={<Agency />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
