import styled from "styled-components";

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 65%;
  margin: 10% 5% 0% 7%;
  justify-content: left;

  @media screen and (max-width: 480px) {
    padding-top: 10%;
  }
`;

export const Column = styled.div`
  @media screen and (max-width: 480px) {
    width: 50vw;
  }
`;

export const Heading = styled.h2`
  padding-bottom: 30px;
`;

export const Content = styled.div`
  @media screen and (max-width: 480px) {
    padding-top: 10%;
  }
`;
