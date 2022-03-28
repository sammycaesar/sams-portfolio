import React from "react";
import Arrow from "../../../images/about-arrow.svg";
import Kafe from "../../../images/kafe-website-wave.png";
import Traffic from "../../../images/traffic-website-wave.png";
import {
  AboutContainer,
  AboutBox,
  Column1,
  Column2,
  Row1,
  Row2,
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
        <AboutBox>
          <Column1>
            <Heading>{headline}</Heading>
            <Content>{content}</Content>
            <Link to='/about'>
              <Button>
                about me
                <AboutArrow
                  src={Arrow}
                  alt='click here to learn more about me'
                />
              </Button>
            </Link>
          </Column1>
          <Column2>
            <Row1 src={Traffic} alt='Traffic Website'></Row1>
            <Row2 src={Kafe} alt='Kafe Website'></Row2>
          </Column2>
        </AboutBox>
      </AboutContainer>
    </>
  );
};

export default AboutSection;
