import React from "react";
import Arrow from "../../../images/about-arrow.svg";
import Kafe from "../../../images/kafe-website-wave.png";
import Traffic from "../../../images/traffic-website-wave.png";
import {
  AboutContainer,
  Column1,
  Column2,
  Column3,
  Heading,
  Content,
  Link,
  Button,
  AboutArrow,
} from "./AboutElements";

const AboutSection = ({ id, headline, content }) => {
  return (
    <>
      <AboutContainer id={id}>
        <Column1>
          <Heading>{headline}</Heading>
          <Content>{content}</Content>
          <Link to='/about'>
            <Button>
              about me
              <AboutArrow src={Arrow} alt='click here to learn more about me' />
            </Button>
          </Link>
        </Column1>
        <Column2 src={Traffic} alt='Traffic Website'></Column2>
        <Column3 src={Kafe} alt='Kafe Website'></Column3>
      </AboutContainer>
    </>
  );
};

export default AboutSection;
