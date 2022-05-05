import React from "react";

import {
  ProjectContainer,
  ProjectBox,
  Row,
  Project,
  ProjectImage,
  ProjectImageWrapper,
  ProjectTitle,
  ProjectTech,
  ProjectContent,
  ProjectLink,
  ProjectArrow,
} from "./ProjectsSectionElements";

import Kafe from "../../../images/kafe-project-mockup.png";
import Traffic from "../../../images/pricing-mockup.png";
import Arrow from "../../../images/up-arrow.svg";
import Lingo from "../../../images/lingo-language.png";
import Wine from "../../../images/wine-project.png";

function ProjectsSection() {
  return (
    <>
      <ProjectContainer id='projects'>
        <ProjectBox>
          <Row>
            <Project>
              <a
                href='https://github.com/sammycaesar/kafe-drinks'
                target='_blank'
                rel='noopener noreferrer'
              >
                <ProjectImageWrapper>
                  <ProjectImage src={Kafe} alt=''></ProjectImage>
                </ProjectImageWrapper>
                <ProjectContent>
                  <ProjectTitle>kafé drink recipes</ProjectTitle>{" "}
                  <ProjectLink>
                    <ProjectArrow src={Arrow} />
                  </ProjectLink>
                  <ProjectTech>reactjs & api</ProjectTech>
                </ProjectContent>
              </a>
            </Project>
            <Project>
              <a
                href='https://github.com/sammycaesar/interactive-pricing-component'
                target='_blank'
                rel='noopener noreferrer'
              >
                <ProjectImageWrapper>
                  <ProjectImage src={Traffic} alt=''></ProjectImage>
                </ProjectImageWrapper>
                <ProjectContent>
                  <ProjectTitle>interactive pricing</ProjectTitle>{" "}
                  <ProjectLink>
                    <ProjectArrow src={Arrow} />
                  </ProjectLink>
                  <ProjectTech>javascript</ProjectTech>
                </ProjectContent>
              </a>
            </Project>
          </Row>

          <Row>
            <Project>
              <a
                href='https://github.com/sammycaesar/lingo'
                target='_blank'
                rel='noopener noreferrer'
              >
                <ProjectImageWrapper>
                  <ProjectImage src={Lingo} alt=''></ProjectImage>
                </ProjectImageWrapper>
                <ProjectContent>
                  <ProjectTitle>language platform</ProjectTitle>{" "}
                  <ProjectLink>
                    <ProjectArrow src={Arrow} />
                  </ProjectLink>
                  <ProjectTech>reactjs</ProjectTech>
                </ProjectContent>
              </a>
            </Project>

            <Project>
              <a
                href='https://github.com/sammycaesar/coming-soon-signup'
                target='_blank'
                rel='noopener noreferrer'
              >
                <ProjectImageWrapper>
                  <ProjectImage src={Wine} alt=''></ProjectImage>
                </ProjectImageWrapper>
                <ProjectContent>
                  <ProjectTitle>wine o'clock landing page</ProjectTitle>{" "}
                  <ProjectLink>
                    <ProjectArrow src={Arrow} />
                  </ProjectLink>
                  <ProjectTech>vanilla js</ProjectTech>
                </ProjectContent>
              </a>
            </Project>
          </Row>
        </ProjectBox>
      </ProjectContainer>
    </>
  );
}

export default ProjectsSection;
