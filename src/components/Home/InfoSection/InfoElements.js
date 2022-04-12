import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  padding: 4em;

  @media screen and (max-width: 480px) {
    padding: 2em;
    height: 300px;
  }
`;

export const InfoBox = styled.div`
  flex: 1 1 0%;
  max-width: 1200px;
  max-height: 300px;
  margin-right: auto;
  margin-left: auto;
`;

export const Heading = styled.h2`
  padding-bottom: 30px;

  @media screen and (max-width: 480px) {
    padding-bottom: 10%;
  }
`;

export const Content = styled.div``;
