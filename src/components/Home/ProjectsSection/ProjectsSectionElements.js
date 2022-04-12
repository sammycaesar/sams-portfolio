import styled from "styled-components";
import Github from "../../../images/github-icon.svg";

export const ProjectContainer = styled.div`
  padding: 4em;
  background-color: #fffdfb;

  @media screen and (max-width: 480px) {
    padding: 2em;
  }
`;

export const ProjectBox = styled.div`
  display: flex;
  align-self: flex-start;
  margin-right: auto;
  margin-left: auto;
  max-width: 1200px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Heading = styled.h2`
  font-size: 40px;
  padding-bottom: 40px;
`;

export const Project = styled.div`
  width: 25rem;
  height: 600px;
  margin-right: 5rem;
  background-color: white;
  border: 1px solid #d4d4d4;
  border-radius: 0.2rem;

  @media screen and (max-width: 900px) {
    margin: 0 0 5rem 0;
    width: 100%;
  }

  @media screen and (min-width: 481px) and (max-width: 900px) {
    height: 700px;
  }

  @media screen and (max-width: 480px) {
    height: 500px;
  }
`;

export const ProjectContent = styled.div`
  padding: 0rem 1rem 0 1rem;
  display: flex;
  flex-flow: row wrap;
  flex: 2 0px;
`;

export const ProjectTitle = styled.h2`
  padding-top: 4rem;
  width: 75%;
  font-weight: 100;
  order: 1;
`;

export const ProjectArrow = styled.img`
  width: 2rem;
  padding-top: 4rem;
  order: 2;
`;

export const ProjectTech = styled.h3`
  font-weight: 100;
  padding-top: 1rem;
  order: 3;
`;

export const ProjectImage = styled.img`
  display: block;
  object-fit: fill;
  width: 100%;
`;

export const ProjectImageWrapper = styled.div`
  background-color: #f0d8fe;
  overflow: hidden;
  position: relative;
  width: 100%;
  z-index: 2;
`;
