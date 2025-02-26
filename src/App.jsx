import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import Games from "./pages/Games.jsx";
import Software from "./pages/Software.jsx";
import About from "./pages/About.jsx";
import Navbar from "./components/Navbar.jsx";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/software" element={<Software />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
