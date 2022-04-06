// eslint-disable-next-line
import React, { useRef, useState } from "react";

import { projectData } from "./data";

import {
  ProjectContainer,
  ProjectBox,
  Heading,
  Project,
  ProjectImage,
  ProjectImageWrapper,
  ProjectTitle,
  ProjectTech,
  ProjectContent,
} from "./ProjectsSectionElements";
import { Link } from "react-router-dom";

import Kafe from "../../../images/kafe-project-mockup.png";
import Traffic from "../../../images/pricing-mockup.png";
import Portfolio from "../../../images/portfolio-project.png";
import Placeholder from "../../../images/coming-soon.png";

function ProjectsSection() {
  return (
    <>
      <ProjectContainer id='projects'>
        <Heading>projects</Heading>

        <ProjectBox>
          <Project>
            <ProjectImageWrapper>
              <ProjectImage src={Kafe} alt=''></ProjectImage>
            </ProjectImageWrapper>
            <ProjectContent>
              <ProjectTitle>kafé drink recipes</ProjectTitle>
              <ProjectTech>reactjs & api</ProjectTech>
            </ProjectContent>
          </Project>

          <Project>
            <ProjectImageWrapper>
              <ProjectImage src={Traffic} alt=''></ProjectImage>
            </ProjectImageWrapper>
            <ProjectContent>
              <ProjectTitle>interactive pricing</ProjectTitle>
              <ProjectTech>javascript</ProjectTech>
            </ProjectContent>
          </Project>
        </ProjectBox>
      </ProjectContainer>
    </>
  );
}

export default ProjectsSection;
