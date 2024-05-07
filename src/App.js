import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, About, Packages, Dexter } from "./Pages";
import "./App.css";
import Signup from "./Pages/Packages/Signup";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/dexter" element={<Dexter />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
