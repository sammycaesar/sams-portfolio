import styled from "styled-components";

export const ProjectContainer = styled.div`
  padding: 4em;
  background-color: #fffdfb;

  @media screen and (max-width: 480px) {
    padding: 2em;
  }
`;

export const ProjectBox = styled.div`
  display: flex;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Row = styled.div`
  display: flex;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Heading = styled.h2`
  font-size: 40px;
  padding-bottom: 40px;
`;

export const Project = styled.div`
  width: 30rem;
  height: 600px;
  margin-right: 2rem;
  margin-top: 2rem;
  background-color: white;
  border: 1px solid #d4d4d4;
  border-radius: 0.2rem;
  

  @media screen and (max-width: 1300px) {
    margin: 0
    width: 80%;
  }

  @media screen and (min-width: 481px) and (max-width: 750px) {
    height: 700px;
  }

  @media screen and (max-width: 480px) {
    height: 400px;
    width: 90%;
  }
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 2 0px;
  padding: 0rem 1rem 0 1rem;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const ProjectTitle = styled.h2`
  width: 75%;
  padding-top: 4rem;
  font-weight: 100;
  order: 1;
  line-height: 50px;

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
    line-height: 30px;
  }
`;

export const ProjectLink = styled.div`
  order: 2;
`;

export const ProjectArrow = styled.img`
  width: 3rem;
  margin-top: 4rem;
  z-index: 10;
  transition: 1s ease-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.3);
    transition: 2s ease-out;
  }
`;

export const ProjectTech = styled.h3`
  font-weight: 100;
  padding-top: 1rem;
  order: 3;
`;

export const ProjectImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const ProjectImageWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  z-index: 2;
  height: 20rem;

  @media screen and (max-width: 900px) {
    height: 10rem;
  }
`;
