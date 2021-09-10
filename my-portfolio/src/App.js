import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";


export default function App() {
  return (
    <div className="text-gray-400 bg-gray-900 body-font">
     <Navbar />
     <About />
     <Projects />
     <Contact />
    </div>
  );
}
