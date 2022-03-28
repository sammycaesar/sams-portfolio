import styled from "styled-components";

import Shape from "../../../images/hero-shape.svg";

export const HeroContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 1300px;
  z-index: -100;
  background-image: url(${Shape});
  background-repeat: no-repeat;
  background-size: cover;

  background-position-y: -30rem;
  margin-top: -10rem;

  @media screen and (max-width: 480px) {
    height: 800px;
    background-position-y: -5rem;
  }
`;

export const HeroBox = styled.div`
  display: flex;
  max-width: 1600px;
  max-height: 600px;
  margin-right: auto;
  margin-left: auto;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const HeroShape = styled.img`
  background-size: cover;
  position: relative;
`;

export const Column1 = styled.img`
  flex: 1%;
  width: 25%;
  transform: scale(1.2);
  -webkit-transform: scale(1.2);
  margin-left: 5rem;
  margin-top: 5rem;

  @media screen and (min-width: 1500px) {
  }
  @media screen and (max-width: 480px) {
    transform: scale(0.8) rotate(-25.73deg);
    -webkit-transform: scale(0.8) rotate(-25.73deg);
    margin: 10rem 0 0 0;
    width: 100%;
  }
`;

export const Column2 = styled.img`
  flex: 1;
  width: 25%;
  transform: scale(0.8) rotate(-25.73deg);
  -webkit-transform: scale(0.8) rotate(-25.73deg);
  margin-top: 30rem;
  margin-left: -10rem;

  @media screen and (max-width: 480px) {
    width: 100vw;
    transform: scale(1) rotate(-25.73deg);
    -webkit-transform: scale(1) rotate(-25.73deg);
    margin: 0;
  }
`;

export const Column3 = styled.img`
  flex: 1%;
  width: 25%;
  transform: scale(1.2) rotate(-23.36deg);
  -webkit-transform: scale(1.2) rotate(-23.36deg);
  margin-top: 50rem;
  margin-left: -5rem;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const Column4 = styled.img`
  flex: 1 1 0%;
  width: 25%;
  transform: scale(1.2);
  -webkit-transform: scale(1.2);
  margin-left: -20rem;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const HeroH1 = styled.h1`
  color: #404040;
  text-align: center;
  letter-spacing: 0.1rem;
  line-height: 70px;
  font-size: 3.5rem;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
