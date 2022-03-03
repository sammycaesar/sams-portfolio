import React from "react";
import Circle from "../../images/footer-shape.svg";

import { FooterContainer, FooterWrapper, FooterShape } from "./FooterElements";

const FooterSection = () => {
  return (
    <FooterContainer id='footer'>
      <FooterWrapper>
        <FooterShape src={Circle} alt='Footer Shape' />
      </FooterWrapper>
    </FooterContainer>
  );
};

export default FooterSection;
