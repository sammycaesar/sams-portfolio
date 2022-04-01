import React from "react";

import Gmail from "../../../images/gmail-icon.svg";
import Linkedin from "../../../images/linkedin-icon.svg";

import {
  HeroContainer,
  HeroBox,
  // HeroShape,
  FloatingIcons,
  Column1,
  Column2,
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
        <Column2>front end developer</Column2>
        <FloatingIcons>
          <GithubIcon></GithubIcon>
          <LinkedinLink href='mailto:samantha.caesar@bigpond.com'>
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
