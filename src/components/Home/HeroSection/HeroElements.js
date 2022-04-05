import styled from "styled-components";

import Shape from "../../../images/hero-shape.svg";

export const HeroContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 900px;
  z-index: -100;

  background-repeat: no-repeat;
  background-size: cover;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;

  padding: 5rem 0;

  margin-top: -10rem;

  @media screen and (max-width: 480px) {
    height: 800px;
    background-position-y: -5rem;
  }
`;

export const HeroBox = styled.div`
  max-width: 1600px;
  margin-right: auto;
  margin-left: auto;
  height: 250px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  width: 90%;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const HeroShape = styled.img`
  background-size: cover;
  position: relative;
`;

export const Column1 = styled.h1`
  flex: 1;
  max-height: 125px;
  padding-left: 10rem;
  align-self: flex-start;
  z-index: 1;
  @media screen and (min-width: 1500px) {
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const Column2 = styled.h1`
  flex: 1;
  max-height: 125px;
  font-weight: 400;
  color: black;
  align-self: center;
  z-index: 1;

  @media screen and (max-width: 480px) {
    width: 100vw;
    margin: 0;
  }
`;

export const FloatingIcons = styled.div`
  cursor: pointer;
  width: 1600px;
  display: block;
  position: absolute;
`;

export const GithubIcon = styled.div``;

export const LinkedinLink = styled.div`
  background-color: #e4f1f8;
  border-radius: 10rem;
  width: 80px;
  height: 80px;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: 50rem;
  margin-top: -10rem;

  &::before {
    background-color: transparent;
    border: 1px solid #e4f1f8;
    border-radius: 100rem;
    content: "";
    height: 40rem;
    width: 40rem;
    pointer-events: none;
    position: absolute;
  }
`;

export const LinkedinIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export const MailLink = styled.div`
  background-color: #feece9;
  border-radius: 10rem;
  width: 80px;
  height: 80px;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: 15rem;

  &::before {
    background-color: transparent;
    border: 1px solid #eee;
    border-radius: 100rem;
    content: "";
    height: 30rem;
    width: 30rem;
    pointer-events: none;
    position: absolute;
  }
`;

export const MailIcon = styled.img`
  width: 32px;
  height: 32px;
`;
