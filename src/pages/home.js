import React, { useState } from "react";

import Navbar from "../components/Home/Navbar";
import Sidebar from "../components/Home/Sidebar";
import HeroSection from "../components/Home/HeroSection";
import InfoSection from "../components/Home/InfoSection";
import ProjectsSection from "../components/Home/ProjectsSection";
import AboutSection from "../components/Home/AboutSection";
import FooterSection from "../components/Home/FooterSection";
import { contactSection } from "../components/Home/InfoSection/data";
import { aboutmeSection } from "../components/Home/AboutSection/data";
import { projectData } from "../components/Home/ProjectsSection/data";

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
      <ProjectsSection {...projectData} />
      <AboutSection {...aboutmeSection} />
      <InfoSection {...contactSection} />
      <FooterSection />
    </>
  );
}

export default Home;
