import React from "react";

import { HeroContainer, HeroBg, HeroContent, HeroH1 } from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <HeroContent>
          <HeroH1>
            {" "}
            <span>
              hey, i'm <u>sam</u>
            </span>{" "}
            <br></br>a front end <br></br>developer
          </HeroH1>
        </HeroContent>
      </HeroBg>
    </HeroContainer>
  );
};

export default HeroSection;
