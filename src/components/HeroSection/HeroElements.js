import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  height: 100vh;
  max-height: 700px;
  position: relative;
`;

export const HeroWrapper = styled.div`
  display: grid;
  width: 100%;
  max-width: 1100px;
`;

export const HeroRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ Img }) => (Img ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width 768px) {
    grid-template-areas: ${({ Img }) =>
      Img ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  } ;
`;

export const Column1 = styled.div`
  margin-top: 5rem;
  grid-area: col1;
`;

export const Column2 = styled.div`
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
`;

export const HeroH1 = styled.h1`
  color: #fff;
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

export const ImgWrap = styled.div`
  width: 50vw;
  max-width: 800px;
  height: 100%;
`;

export const Img = styled.img`
  top: -80px;
  right: 0;
  position: absolute;
  width: 55%;
`;
