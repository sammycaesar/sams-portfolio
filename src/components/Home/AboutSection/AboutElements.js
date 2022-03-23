import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const AboutContainer = styled.div`
  margin-top: 10%;
  padding-left: 5%;
  height: 800px;
  max-width: 100vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  background: #404040;
  color: white;

  @media screen and (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

export const Column1 = styled.div`
  padding: 30% 3% 0 5%;
  grid-area: 1 / 1 / 2 / 2;

  @media screen and (max-width: 480px) {
  }
`;

export const Column2 = styled.img`
  grid-area: 1 / 2 / 2 / 3;
  margin: 0 0 0 5rem;
  transform: scale(0.8);
  -webkit-transform: scale(0.8);

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const Column3 = styled.img`
  grid-area: 1 / 3 / 2 / 4;
  margin: 30rem 0 0 -60rem;
  transform: scale(0.8);
  -webkit-transform: scale(0.8);

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const Heading = styled.h2`
  width: 616px;
  color: #e8eeff;
  font-size: 50px;
  line-height: 64px;

  @media screen and (max-width: 480px) {
    width: 75vw;
    font-size: 2.5rem;
    line-height: 50px;
  }
`;

export const Content = styled.p`
  padding-top: 30px;
  width: 625px;
  color: #e8eeff;

  @media screen and (max-width: 480px) {
    width: 75vw;
  }
`;

export const Link = styled(LinkR)``;

export const Button = styled.button`
  width: 13rem;
  height: 4.25rem;
  padding-left: 3%;
  margin-top: 10%;
  color: white;
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: left;
  background: #7f7cff;
  border-radius: 0.75rem;
  border: none;

  @media screen and (max-width: 480px) {
    padding-left: 5%;
  }
`;

export const AboutArrow = styled.img`
  height: 30%;
  padding-left: 10%;
  vertical-align: middle;
`;
