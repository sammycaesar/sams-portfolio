import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  align-items: start;
  height: 100vh;
  max-height: 700px;
  position: relative;
  overflow-x: visible;
`;

export const HeroWrapper = styled.div`
  display: block;
  width: 100%;
`;

export const HeroShape = styled.img`
  display: inline-flex;
  width: 100%;
  max-height: 1500px;
  z-index: -10;
  margin-top: -10rem;
  position: relative;
`;

export const HeroRow = styled.div`
  display: grid;
  grid-template-columns: repeat(0, 1fr);
`;

export const Column1 = styled.div`
  margin-top: 5rem;

  @media screen and (max-width: 480px) {
    margin-top: 15rem;
  }
`;

export const Column2 = styled.div``;

export const TextWrapper = styled.div`
  max-width: 600px;
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
