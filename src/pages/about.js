import React from "react";

import AboutPage from "../components/About";
import {
  introContent,
  capabilitiesContent,
  educationContent,
} from "../components/About/data";

function About() {
  return (
    <>
      <AboutPage
        {...introContent}
        {...capabilitiesContent}
        {...educationContent}
      />
    </>
  );
}

export default About;
