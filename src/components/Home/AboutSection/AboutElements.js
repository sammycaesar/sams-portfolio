import styled, { keyframes } from "styled-components";
import { Link as LinkR } from "react-router-dom";

const bounce = keyframes`
{
  from {
      transform: translate3d(0, 0, 0);
  }
  to {
      transform: translate3d(0, 15px, 0);
  }
}
`;

export const AboutContainer = styled.div`
  padding: 4em;
  height: 700px;
  background-color: var(--purple-background);

  @media screen and (max-width: 480px) {
    font-size: 1.25rem;
    padding: 2em;
    height: 900px;
  }
`;

export const AboutBox = styled.div`
  display: flex;
  max-width: 1200px;
  max-height: 600px;
  margin-right: auto;
  margin-left: auto;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  position: relative;
`;

export const Column1 = styled.div`
  flex: 1 1 0%;
  width: 80%;

  @media screen and (max-width: 480px) {
    padding-top: 10em;
  }
`;

export const Column2 = styled.div`
  width: 20%;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;

  animation: ${bounce} 1.5s linear infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const Row1 = styled.div`
  flex: 1;
  transform: translate(30%, 50%);
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
export const Row2 = styled.div`
  flex: 1;
  transform: translate(20%, 30%);

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const Row3 = styled.div`
  flex: 1;
  transform: translate(50%, -10%);

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const Icon1 = styled.h2`
  display: flex;
  background: transparent;
  color: #f9d5ff;
  width: 18rem;
  height: 10rem;
  border-radius: 5rem;
  font-size: 7rem;
  justify-content: center;
  align-items: center;
  border: 2px solid #f9d5ff;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const Icon2 = styled.h2`
  display: flex;
  background: #f9d5ff;
  color: #9581ca;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const Icon3 = styled.h2`
  display: flex;
  background: transparent;
  color: #f9d5ff;
  width: 18rem;
  height: 10rem;
  border-radius: 1rem;
  font-size: 4rem;

  justify-content: center;
  align-items: center;
  border: 2px solid #f9d5ff;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const Heading = styled.h2`
  color: #fffdfb;
  font-size: 50px;
  line-height: 64px;
  position: relative;

  @media screen and (max-width: 480px) {
    width: 75vw;
    font-size: 2.5rem;
    line-height: 50px;
  }
`;

export const Content = styled.p`
  padding-top: 30px;
  color: #fffdfb;

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
    line-height: 2.5rem;
  }
`;

export const Link = styled(LinkR)``;

export const Button = styled.button`
  width: 13rem;
  height: 4.25rem;
  padding-left: 3%;
  margin-top: 10%;
  color: white;
  background: #b3a5d9;
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: left;
  border: 1px solid white;
  border-radius: 0.2rem;
  cursor: pointer;

  &:hover {
    background-color: #c1adf7;
    transition: 0.5s ease-out;
  }

  @media screen and (max-width: 480px) {
    padding-left: 5%;
  }
`;

export const AboutArrow = styled.img`
  width: 30%;
  height: 30%;
  padding-left: 10%;
  vertical-align: middle;
`;
