import React from "react";

import Arrow from "../../../images/about-arrow.svg";

import {
  AboutContainer,
  AboutBox,
  Column1,
  Column2,
  Row1,
  Row2,
  Row3,
  Icon1,
  Icon2,
  Icon3,
  Heading,
  Content,
  Link,
  Button,
  AboutArrow,
} from "./AboutElements";

function AboutSection({ id, headline, content }) {
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
            <Row1>
              <Icon1>if</Icon1>
            </Row1>
            <Row2>
              <Icon2>&#123; &#125;</Icon2>
            </Row2>

            <Row3>
              <Icon3>&#60; / &#62;</Icon3>
            </Row3>
          </Column2>
        </AboutBox>
      </AboutContainer>
    </>
  );
}

export default AboutSection;
