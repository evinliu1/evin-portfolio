import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import SocialSidebar from "./components/SocialSidebar";

const App = () => {
  return (
    <>
      <Header />
      <SocialSidebar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Skill />
        <Contact />
      </main>
    </>
  );
};

export default App;
