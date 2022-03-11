import React from "react";
import {
  AboutContainer,
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

function AboutPage({
  introduction,
  technology,
  tools,
  uni,
  degree,
  duration,
  logo,
}) {
  return (
    <>
      <AboutContainer>
        <IntroContainer>
          <Heading>frontend developer & digital designer</Heading>
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
