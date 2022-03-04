import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import ProjectsSection from "../components/ProjectsSection";
import AboutSection from "../components/AboutSection";
import FooterSection from "../components/FooterSection";
import { contactSection } from "../components/InfoSection/data";
import { aboutmeSection } from "../components/AboutSection/data";
import { projectData } from "../components/ProjectsSection/data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <ProjectsSection {...projectData} />
      <AboutSection {...aboutmeSection} />
      <InfoSection {...contactSection} />
      <FooterSection />
    </>
  );
};

export default Home;
