import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const AboutContainer = styled.div`
  padding: 0 5% 0 5%;
  width: 100vw;
  background: #e8eefe;
  color: #7f7cff;
  display: grid;
  white-space: pre-line;
  vertical-align: bottom;
`;

export const Nav = styled.div`
  height: 100px;
`;

export const Back = styled.img`
  height: 100px;
  width: 200px;
  transform: rotate(180deg);
`;

export const Link = styled(LinkR)`
  height: 100px;
`;

export const IntroContainer = styled.div`
  height: 450px;
  padding-top: 5%;
  display: grid;
  grid-template-columns: 60%;

  @media screen and (max-width: 480px) {
    height: 35rem;
    width: 30rem;
  }
`;

export const IntroContent = styled.p`
  line-height: 40px;
  font-size: 20px;
  color: #404040;
`;

export const CapabilitiesContainer = styled.div`
  margin-top: 5%;
  padding: 5% 2% 0 2%;
  height: 350px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  border-top-style: solid;
  border-width: 5px;
  border-color: #7f7cff;
  border-radius: 5px;
  background-color: white;

  @media screen and (max-width: 480px) {
    height: 40rem;
    width: 90vw;
    grid-template-columns: 1fr;
    grid-template-rows: 5rem repeat(2, 1fr);
    padding: 10% 5% 0 10%;
  }
`;

export const Heading = styled.h2`
  width: 600px;
  color: #7f7cff;
  font-size: 50px;
  line-height: 50px;

  @media screen and (max-width: 480px) {
    width: 80vw;
    font-size: 2rem;
  }
`;

export const SubHeading = styled.p`
  color: #404040;
  font-size: 20px;
`;

export const Info = styled.p`
  color: #7f7cff;
  font-size: 20px;
  line-height: 30px;
`;

export const Capabilities = styled.p`
  color: #7f7cff;
`;

export const EducationContainer = styled.div`
  margin: 5% 0;
  padding: 5% 2% 0 2%;
  height: 350px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  border-top-style: solid;
  border-width: 5px;
  border-radius: 5px;
  border-color: #7f7cff;
  background-color: white;

  @media screen and (max-width: 480px) {
    height: 20rem;
    width: 90vw;
    grid-template-columns: 1fr;
    grid-template-rows: 5rem 1fr;
    padding: 10% 5% 0 10%;
  }
`;

export const Education = styled.p`
  padding-top: 30px;
  color: #7f7cff;

  @media screen and (max-width: 480px) {
    padding-top: 0;
    padding-right: 50px;
  }
`;
