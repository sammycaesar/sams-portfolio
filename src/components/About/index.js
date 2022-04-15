import React from "react";
import BackArrow from "../../images/project-arrow.svg";

import {
  AboutContainer,
  Nav,
  Back,
  Link,
  IntroContainer,
  IntroContent,
  CapabilitiesContainer,
  Heading,
  SubHeading,
  Info,
  Capabilities,
  EducationContainer,
  Education,
} from "./AboutPageElements";

function AboutPage({ introduction, technology, tools, uni, degree, duration }) {
  return (
    <>
      <AboutContainer>
        <Nav>
          <Link to='/'>
            <Back src={BackArrow} alt='go back home' />
          </Link>
        </Nav>
        <IntroContainer>
          <Heading>developer & digital designer</Heading>
          <IntroContent>{introduction}</IntroContent>
        </IntroContainer>

        <CapabilitiesContainer>
          <Heading>capabilities</Heading>
          <Capabilities>
            <SubHeading>tech stack</SubHeading>
            <Info>{technology}</Info>
          </Capabilities>
          <Capabilities>
            <SubHeading>tools</SubHeading>
            <Info>{tools}</Info>
          </Capabilities>
        </CapabilitiesContainer>

        <EducationContainer>
          <Heading>education</Heading>
          <Education>
            <SubHeading>{degree}</SubHeading>
            <Info>{uni}</Info>
            <Info>{duration}</Info>
          </Education>
        </EducationContainer>
      </AboutContainer>
    </>
  );
}

export default AboutPage;
