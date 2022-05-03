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
              <ProjectImageWrapper>
                <ProjectImage src={Kafe} alt=''></ProjectImage>
              </ProjectImageWrapper>
              <ProjectContent>
                <ProjectTitle>kafé drink recipes</ProjectTitle>{" "}
                <ProjectLink>
                  <a
                    href='https://github.com/sammycaesar/kafe-drinks'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <ProjectArrow src={Arrow} />
                  </a>
                </ProjectLink>
                <ProjectTech>reactjs & api</ProjectTech>
              </ProjectContent>
            </Project>
            <Project>
              <ProjectImageWrapper>
                <ProjectImage src={Traffic} alt=''></ProjectImage>
              </ProjectImageWrapper>
              <ProjectContent>
                <ProjectTitle>interactive pricing</ProjectTitle>{" "}
                <ProjectLink>
                  <a
                    href='https://github.com/sammycaesar/interactive-pricing-component'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <ProjectArrow src={Arrow} />
                  </a>
                </ProjectLink>
                <ProjectTech>javascript</ProjectTech>
              </ProjectContent>
            </Project>
          </Row>

          <Row>
            <Project>
              <ProjectImageWrapper>
                <ProjectImage src={Lingo} alt=''></ProjectImage>
              </ProjectImageWrapper>
              <ProjectContent>
                <ProjectTitle>language platform</ProjectTitle>{" "}
                <ProjectLink>
                  <a
                    href='https://github.com/sammycaesar/lingo'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <ProjectArrow src={Arrow} />
                  </a>
                </ProjectLink>
                <ProjectTech>reactjs</ProjectTech>
              </ProjectContent>
            </Project>

            <Project>
              <ProjectImageWrapper>
                <ProjectImage src={Wine} alt=''></ProjectImage>
              </ProjectImageWrapper>
              <ProjectContent>
                <ProjectTitle>wine o'clock landing page</ProjectTitle>{" "}
                <ProjectLink>
                  <a
                    href='https://github.com/sammycaesar/coming-soon-signup'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <ProjectArrow src={Arrow} />
                  </a>
                </ProjectLink>
                <ProjectTech>vanilla js</ProjectTech>
              </ProjectContent>
            </Project>
          </Row>
        </ProjectBox>
      </ProjectContainer>
    </>
  );
}

export default ProjectsSection;
