import logo from './logo.svg';
import './App.css';
import React from "react";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />

      {/* IMPORTANT OFFSET */}
      <main className="pt-16">
        <Hero />
        <About />
        <Skills/>
        <Project/>
      </main>
    </div>
  );
}

export default App;