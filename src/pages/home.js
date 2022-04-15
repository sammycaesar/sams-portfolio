import React, { useState } from "react";

import Navbar from "../components/Home/Navbar";
import Sidebar from "../components/Home/Sidebar";
import HeroSection from "../components/Home/HeroSection";
import InfoSection from "../components/Home/InfoSection";
import ProjectsSection from "../components/Home/ProjectsSection";
import AboutSection from "../components/Home/AboutSection";
import { contactSection } from "../components/Home/InfoSection/data";
import { aboutmeSection } from "../components/Home/AboutSection/data";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <ProjectsSection />
      <AboutSection {...aboutmeSection} />
      <InfoSection {...contactSection} />
    </>
  );
}

export default Home;
