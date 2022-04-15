import styled, { keyframes } from "styled-components";

const bounce = keyframes`
{
  from {
      transform: translate3d(0, 0, 0);
  }
  to {
      transform: translate3d(0, 10px, 0);
  }
}
`;

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
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 250px;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 950px) {
    padding: 0 2em;
    line-height: 3rem;
    text-align: center;
  }
`;

export const HeroShape = styled.img`
  background-size: cover;
  position: relative;
`;

export const Column1 = styled.h1`
  max-height: 100px;
  padding-left: 15rem;
  flex: 1;
  align-self: flex-start;
  z-index: 1;

  @media screen and (max-width: 950px) {
    padding: 0;
    max-height: 150px;
    align-self: center;
  }
`;

export const Column2 = styled.h1`
  max-height: 100px;
  padding-left: 10rem;
  flex: 1;
  align-self: center;
  z-index: 1;
  font-weight: 400;
  color: black;

  @media screen and (max-width: 950px) {
    max-height: 150px;
    padding-top: 1.5rem;
    padding-left: 0;
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
  display: flex;
  width: 80px;
  height: 80px;
  margin-left: 40rem;
  margin-top: 0rem;
  background-color: #eddff0;
  border-radius: 10rem;
  align-items: center;
  justify-content: center;
  animation: ${bounce} 1.5s linear infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;

  &:hover::before {
    background-color: #eddff0;
    opacity: 0.3;
    z-index: -1;
    transition: 0.5s ease-out;
  }

  &::before {
    height: 25rem;
    width: 25rem;
    background-color: transparent;
    border: 2px solid #fdf0ff;
    border-radius: 100rem;
    content: "";
    pointer-events: none;
    position: absolute;
    transition: 1s ease-out;
  }

  @media screen and (max-width: 950px) {
    margin-left: 5rem;
    margin-top: 2rem;

    &::before {
      width: 25rem;
      height: 25rem;
    }

    @media screen and (min-width: 200px) and (max-width: 500px) {
      margin-left: 5rem;
    }
  }
`;

export const GithubIcon = styled.img`
  width: 40px;
  height: 40px;
`;

export const LinkedinLink = styled.div`
  display: flex;
  width: 80px;
  height: 80px;
  margin-left: 50rem;
  margin-top: -20rem;
  border-radius: 10rem;
  align-items: center;
  justify-content: center;
  background-color: #e4f1f8;
  transition: 1s ease-out;
  animation: ${bounce} 2s linear infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;

  &:hover::before {
    background-color: #e4f1f8;
    opacity: 0.3;
    z-index: -1;
    transition: 0.5s ease-out;
  }

  &::before {
    height: 25rem;
    width: 25rem;
    background-color: transparent;
    border: 2px solid #e4f1f8;
    border-radius: 100rem;
    content: "";
    pointer-events: none;
    position: absolute;
    transition: 1s ease-out;
  }

  @media screen and (min-width: 701px) and (max-width: 950px) {
    margin-left: 25rem;
    margin-bottom: 20rem;
  }

  @media screen and (max-width: 700px) {
    margin-left: 10rem;
    margin-top: -30rem;

    &::before {
      width: 22rem;
      height: 22rem;
    }
  }
`;

export const LinkedinIcon = styled.img`
  width: 40px;
  height: 40px;
`;

export const MailLink = styled.div`
width: 80px;
height: 80px;
margin-left: 10rem;
  background-color: #feece9;
  border-radius: 10rem;
  align-items: center;
  display: flex;
  justify-content: center;
  transition: transform 2s ease;
  position: absolute;
  cursor: pointer;
  transition: 1s ease-out;
  animation: ${bounce} 1.75s linear infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;

  &:hover::before {
    background-color: #feece9;
    opacity: 0.3;
    z-index: -1;
    transition: 0.5s ease-out;
  }

  &::before {
    height: 30rem;
    width: 30rem;
    background-color: transparent;
    border: 2px solid #feece9;
    border-radius: 100rem;
    content: "";
    pointer-events: none;
    position: absolute;
    transition: 1s ease-out;
  }

  @media screen and (min-width: 701px) and (max-width: 950px) {
    margin-top: -30rem;
  }

  @media screen and (max-width: 700px) {
    margin-top: -2rem;
    margin-left: -2rem;

    &::before {
      height: 20rem;
      width: 20rem;
    }
  }
`;

export const MailIcon = styled.img`
  width: 40px;
  height: 40px;
`;
