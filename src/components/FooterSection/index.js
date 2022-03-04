import React from "react";
import Circle from "../../images/footer-shape.svg";

import {
  FooterContainer,
  FooterWrapper,
  FooterShape,
  FooterSocials,
  FooterInfo,
} from "./FooterElements";

const FooterSection = () => {
  return (
    <FooterContainer id='footer'>
      <FooterWrapper>
        <FooterShape src={Circle} alt='Footer Shape' />
        <FooterSocials></FooterSocials>
        <FooterInfo>© 2022 samantha caesar | terms & conditions</FooterInfo>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default FooterSection;
