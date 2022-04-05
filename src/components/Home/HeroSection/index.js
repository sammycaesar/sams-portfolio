import React from "react";

import Gmail from "../../../images/gmail-icon.svg";
import Linkedin from "../../../images/linkedin-icon.svg";
import Github from "../../../images/github-icon.svg";

import {
  HeroContainer,
  HeroBox,
  // HeroShape,
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

import { motion } from "framer-motion/dist/framer-motion";

function HeroSection() {
  return (
    <HeroContainer id='home'>
      {/* <motion.div
        variants={imageAnimation}
        initial='hidden'
        animate='show'
        exit='exit'
      > */}
      <HeroBox>
        <Column1>samantha caesar</Column1>
        <Column2>fullstack developer</Column2>
        <FloatingIcons>
          <GithubLink
            href='https://github.com/sammycaesar'
            target='_blank'
            rel='noopener noreferrer'
          >
            <GithubIcon src={Github} alt='Github'></GithubIcon>
          </GithubLink>
          <LinkedinLink
            href='https://www.linkedin.com/in/samanthacaesar/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <LinkedinIcon src={Linkedin} alt='Linkedin'></LinkedinIcon>
          </LinkedinLink>
          <MailLink href='mailto:samantha.caesar@bigpond.com'>
            <MailIcon src={Gmail} alt='Gmail'></MailIcon>
          </MailLink>
        </FloatingIcons>
      </HeroBox>
      {/* </motion.div> */}
    </HeroContainer>
  );
}

export default HeroSection;
