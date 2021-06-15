import React from "react";
import SamChilling from "../../images/sam-chilling.png";
import { CgMouse } from "react-icons/cg";
import {
  HeroContainer,
  HeroWrapper,
  HeroRow,
  Column1,
  TextWrapper,
  HeroH1,
  Column2,
  ImgWrap,
  Img,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer id='home'>
      <HeroWrapper>
        <HeroRow>
          <Column1>
            <TextWrapper>
              <HeroH1>
                {" "}
                <span>
                  hey, i'm <u>sam</u>
                </span>{" "}
                <br></br>a front end <br></br>developer
              </HeroH1>
            </TextWrapper>
            <CgMouse />
          </Column1>

          <Column2>
            <ImgWrap>
              <Img src={SamChilling} alt='Sam Coding Imagery' />
            </ImgWrap>
          </Column2>
        </HeroRow>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default HeroSection;
