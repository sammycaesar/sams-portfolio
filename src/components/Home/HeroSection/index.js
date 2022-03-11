import React from "react";
import Shape from "../../../images/hero-shape.svg";
import {
  HeroContainer,
  HeroWrapper,
  HeroShape,
  HeroRow,
  Column1,
  TextWrapper,
  HeroH1,
  Column2,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer id='home'>
      <HeroWrapper>
        <HeroShape src={Shape} alt='Intro Shape' />
        <HeroRow>
          <Column1>
            <TextWrapper>
              <HeroH1></HeroH1>
            </TextWrapper>
          </Column1>
          <Column2></Column2>
        </HeroRow>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default HeroSection;
