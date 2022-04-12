import styled from "styled-components";

import Shape from "../../../images/hero-shape.svg";

export const HeroContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 600px;
  z-index: -100;
  background-color: #fffdfb;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;

  @media screen and (min-width: 600px) and (max-width: 950px) {
    padding-top: 10rem;
  }

  @media screen and (min-width: 200px) and (max-width: 500px) {
    height: 80vh;
    padding-bottom: 10rem;
  }
`;

export const HeroBox = styled.div`
  max-width: 1200px;
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  height: 250px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 950px) {
    line-height: 3rem;
    text-align: center;
    padding: 0 2em;
  }
`;

export const HeroShape = styled.img`
  background-size: cover;
  position: relative;
`;

export const Column1 = styled.h1`
  flex: 1;
  max-height: 100px;
  padding-left: 10rem;
  align-self: flex-start;
  z-index: 1;

  @media screen and (max-width: 950px) {
    padding: 0;
    max-height: 150px;
    align-self: center;
  }
`;

export const Column2 = styled.h1`
  flex: 1;
  max-height: 100px;
  font-weight: 400;
  color: black;
  align-self: center;
  z-index: 1;

  @media screen and (max-width: 950px) {
    max-height: 150px;
    padding-top: 1.5rem;
  }
`;

export const FloatingIcons = styled.div`
  cursor: pointer;
  max-width: 1200px;
  display: block;
  position: relative;

  @media screen and (max-width: 325px) {
    display: none;
  }
`;
export const GithubLink = styled.div`
  background-color: #eddff0;
  border-radius: 10rem;
  width: 80px;
  height: 80px;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: 40rem;
  margin-top: 0rem;

  &::before {
    background-color: transparent;
    border: 2px solid #fdf0ff;
    border-radius: 100rem;
    content: "";
    height: 25rem;
    width: 25rem;
    pointer-events: none;
    position: absolute;
  }

  @media screen and (max-width: 950px) {
    transform: translate(350%, 100%);
    margin: 0;

    &::before {
      height: 25rem;
      width: 25rem;
    }

    @media screen and (min-width: 200px) and (max-width: 500px) {
      transform: translate(150%, 50%);
      margin: 0;
    }
  }
`;

export const GithubIcon = styled.img`
  width: 40px;
  height: 40px;
`;

export const LinkedinLink = styled.div`
  background-color: #e4f1f8;
  border-radius: 10rem;
  width: 80px;
  height: 80px;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: 50rem;
  margin-top: -20rem;

  &::before {
    background-color: transparent;
    border: 2px solid #e4f1f8;
    border-radius: 100rem;
    content: "";
    height: 25rem;
    width: 25rem;
    pointer-events: none;
    position: absolute;
  }

  @media screen and (min-width: 701px) and (max-width: 950px) {
    transform: translate(600%, -400%);
    margin: 0;
  }

  @media screen and (max-width: 700px) {
    transform: translate(280%, -300%);
    margin: 0;

    &::before {
      height: 22rem;
      width: 22rem;
    }
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
  margin-left: 5rem;

  &::before {
    background-color: transparent;
    border: 2px solid #feece9;
    border-radius: 100rem;
    content: "";
    height: 30rem;
    width: 30rem;
    pointer-events: none;
    position: absolute;
  }

  @media screen and (min-width: 701px) and (max-width: 950px) {
    transform: translate(200%, -500%);
    margin: 0;
  }

  @media screen and (max-width: 700px) {
    transform: translate(-50%, -500%);
    margin: 0;

    &::before {
      height: 20rem;
      width: 20rem;
    }
  }
`;

export const MailIcon = styled.img`
  width: 32px;
  height: 32px;
`;
