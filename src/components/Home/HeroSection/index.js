import React from "react";

import Shape from "../../../images/hero-shape.svg";
import Kafe from "../../../images/kafe-website-wave.png";
import Traffic from "../../../images/traffic-website-wave.png";
import {
  HeroContainer,
  HeroBox,
  // HeroShape,
  Column1,
  Column2,
  Column3,
  Column4,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer id='home'>
      {/* <HeroShape src={Shape} alt='Intro Shape' /> */}
      <HeroBox>
        <Column1 src={Kafe} alt='Kafe Website'></Column1>
        <Column2 src={Traffic} alt='Traffic Website'></Column2>
        <Column3 src={Kafe} alt='Kafe Website'></Column3>
        <Column4 src={Traffic} alt='Traffic Website'></Column4>
      </HeroBox>
    </HeroContainer>
  );
};

export default HeroSection;
