import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import "./main.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/about/about";
import NotFound from "./pages/notfound/notFound";
import Logements from "./pages/logements/logements";

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="logements/:id" element={<Logements />} />{" "}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
