import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  height: 200px;
`;

export const FooterWrapper = styled.div`
  text-align: center;
`;

export const FooterShape = styled.img`
  width: 100%;
  height: 500px;
  margin-bottom: -5rem;

  @media screen and (max-width: 480px) {
    height: 250px;
  }
`;

export const FooterInfo = styled.div`
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;
