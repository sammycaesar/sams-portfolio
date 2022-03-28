import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  padding: 4em;

  @media screen and (max-width: 480px) {
    padding: 2em;
  }
`;

export const InfoBox = styled.div`
  flex: 1 1 0%;
  max-width: 1600px;
  max-height: 300px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 480px) {
    max-width: 100vw;
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
