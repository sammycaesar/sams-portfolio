import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  align-items: start;
  height: 100vh;
  max-height: 700px;
  position: relative;
  max-width: 100vw;
  z-index: -100;
  @media screen and (max-width: 480px) {
    height: 50vh;
  }
`;

export const HeroWrapper = styled.div`
  display: block;
`;

export const HeroShape = styled.img`
  max-height: 1500px;
  width: 100vw;
  margin-top: -10rem;

  @media screen and (max-width: 480px) {
    transform: scale(4);
    -webkit-transform: scale(4);
  }
`;

export const HeroRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 100vh;
  margin-top: -60%;
  width: 100vw;
`;

export const Column1 = styled.img`
  grid-area: 1 / 1 / 2 / 2;
  margin-top: 10rem;
  margin-left: -5rem;
  transform: scale(0.8);
  -webkit-transform: scale(0.8);

  @media screen and (min-width: 1500px) {
    margin-left: 10rem;
  }
  @media screen and (max-width: 480px) {
    margin-top: 6rem;
  }
`;

export const Column2 = styled.img`
  grid-area: 1 / 2 / 2 / 3;
  margin-top: 20rem;
  margin-left: -25rem;
  transform: scale(0.5) rotate(-25.73deg);
  -webkit-transform: scale(0.5) rotate(-25.73deg);

  @media screen and (max-width: 480px) {
    margin-left: -55rem;
    margin-top: 15rem;
  }
`;

export const Column3 = styled.img`
  grid-area: 1 / 3 / 2 / 4;
  margin-top: 35rem;
  margin-left: -15rem;
  transform: scale(0.9) rotate(-23.36deg);
  -webkit-transform: scale(0.9) rotate(-23.36deg);

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const Column4 = styled.img`
  grid-area: 1 / 4 / 2 / 5;
  margin-left: -40rem;
  margin-top: 5rem;
  transform: scale(0.8);
  -webkit-transform: scale(0.8);

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
