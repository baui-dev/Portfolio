// src/pages/Home/Home.tsx
import React from "react";
import "./Home.css";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Experience from "../../components/Experience/Experience";
import Projects from "../../components/Projects/Projects";
import Technologies from "../../components/Technologies/Technologies";
import Contact from "../../components/Contact/Contact";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <Technologies />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
