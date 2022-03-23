import styled from "styled-components";
import Github from "../../../images/github-icon.svg";

export const ProjectContainer = styled.div`
  margin: 0;
  padding-top: 10%;
  padding-left: 7%;

  @media screen and (max-width: 480px) {
    padding-top: 50%;
  }
`;

export const Heading = styled.h2`
  font-size: 40px;
  padding-bottom: 4rem;
`;

export const SliderItem = styled.div`
  width: 400px;
  height: 600px;
  border-radius: 0.25rem;
  background-color: #e8eeff;
  margin-bottom: 40%;

  @media screen and (max-width: 480px) {
    width: 20rem;
    height: 30rem;
  }
`;

export const SliderTech = styled.p`
  position: relative;
  width: 200px;
  height: 50px;
  top: 8%;
  left: 12%;
  background: #7f7cff;
  border-radius: 0.5rem;
  border-style: none;
  color: white;
  font-size: 20px;
  text-align: left;
  padding: 2% 0 0 5%;
`;

export const SliderImageBorder = styled.div`
  position: relative;
  align-items: center;
  width: 300px;
  height: 180px;
  top: 15%;
  left: 12%;
  background: #4040;
  border-radius: 0.5rem;
  border: 10px solid #fff;

  @media screen and (max-width: 480px) {
    width: 15rem;
    height: 9.25rem;
  }
`;

export const SliderImage = styled.div``;

export const SliderTitle = styled.div`
  position: relative;
  top: 30%;
  left: 12%;
  color: #7f7cff;
  font-family: Space Grotesk;
  font-size: 30px;
  width: 300px;

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const SliderContent = styled.div`
  padding-top: 10rem;
  @media screen and (max-width: 480px) {
    padding-top: 7rem;
  }
`;

export const SliderCode = styled.button`
  margin-left: 12%;
  margin-top: 5%;
  padding: 0 0 0 50px;
  background-image: url(${Github});
  height: 50px;
  border: none;
  background-color: #e8eefe;
`;
