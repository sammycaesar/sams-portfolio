import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  padding: 4em;

  @media screen and (max-width: 480px) {
    height: 300px;
    padding: 2em;
  }
`;

export const InfoBox = styled.div`
  max-width: 1200px;
  max-height: 300px;
  flex: 1 1 0%;
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
