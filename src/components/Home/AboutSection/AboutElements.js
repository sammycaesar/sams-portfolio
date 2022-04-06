import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const AboutContainer = styled.div`
  padding: 4em;
  height: 700px;
  background: #404040;
  color: white;

  @media screen and (max-width: 480px) {
    font-size: 1.25rem;
    padding: 2em;
    height: 700px;
  }
`;

export const AboutBox = styled.div`
  display: flex;
  max-width: 1600px;
  max-height:600px;
  margin-right: auto;
  margin-left: auto;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  position: relative
  top: 50%;
  left 50%;
`;

export const Column1 = styled.div`
  flex: 1 1 0%;
  width: 80%;
`;

export const Column2 = styled.div`
  flex: 1 1 0%;
  width: 20%;

  flex-direction: column;
  transform: scale(0.7);
  -webkit-transform: scale(0.7);
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const Row1 = styled.img`
  flex: 1;
  padding-left: 10rem;

  transform: scale(1.5);
  -webkit-transform: scale(1.5);

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
export const Row2 = styled.img`
  flex: 1;
  padding-top: 8rem;
  transform: scale(1.2);
  -webkit-transform: scale(1.2);

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const Heading = styled.h2`
  color: #fcf7f2;
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
  color: #fcf7f2;

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
  background: #b3a5d9;
  border-radius: 0.5rem;
  border: none;

  @media screen and (max-width: 480px) {
    padding-left: 5%;
  }
`;

export const AboutArrow = styled.img`
  height: 30%;
  padding-left: 10%;
  vertical-align: middle;
  width: 35%;
`;
