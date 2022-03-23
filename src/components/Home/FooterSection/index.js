import React from "react";
import Circle from "../../../images/footer-shape.svg";

import {
  FooterContainer,
  FooterWrapper,
  FooterShape,
  FooterInfo,
} from "./FooterElements";

const FooterSection = () => {
  return (
    <FooterContainer id='footer'>
      <FooterWrapper>
        <FooterShape src={Circle} alt='Footer Shape' />
        <FooterInfo>© 2022 samantha caesar | terms & conditions</FooterInfo>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default FooterSection;
