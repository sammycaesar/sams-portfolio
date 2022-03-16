import React from "react";
import Arrow from "../../../images/about-arrow.svg";
import {
  AboutContainer,
  Column1,
  Column2,
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
        <Column2></Column2>
      </AboutContainer>
    </>
  );
};

export default AboutSection;
