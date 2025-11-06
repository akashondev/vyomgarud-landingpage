import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Capabilities from "./components/Capabilities";
import Highlights from "./components/Highlights";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Capabilities />
      <Highlights />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
