import React from "react";

import Gmail from "../../../images/gmail-icon.svg";
import Linkedin from "../../../images/linkedin-icon.svg";
import Github from "../../../images/github-icon.svg";

import {
  HeroContainer,
  HeroBox,
  FloatingIcons,
  Column1,
  Column2,
  GithubLink,
  GithubIcon,
  LinkedinLink,
  LinkedinIcon,
  MailLink,
  MailIcon,
} from "./HeroElements";

function HeroSection() {
  return (
    <HeroContainer id='home'>
      <HeroBox>
        <Column1>samantha caesar</Column1>
        <Column2>portfolio</Column2>

        <FloatingIcons>
          <GithubLink>
            <a
              href='https://github.com/sammycaesar'
              target='_blank'
              rel='noopener noreferrer'
            >
              <GithubIcon src={Github} alt='Github' />
            </a>
          </GithubLink>

          <LinkedinLink>
            <a
              href='https://www.linkedin.com/in/samanthacaesar/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <LinkedinIcon src={Linkedin} alt='Linkedin' />
            </a>
          </LinkedinLink>

          <MailLink>
            <a href='mailto:samantha.caesar@bigpond.com'>
              <MailIcon src={Gmail} alt='Gmail' />
            </a>
          </MailLink>
        </FloatingIcons>
      </HeroBox>
    </HeroContainer>
  );
}

export default HeroSection;
