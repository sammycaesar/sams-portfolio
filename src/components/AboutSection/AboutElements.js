import styled from "styled-components";

export const AboutContainer = styled.div`
  margin-top: 20%;
  padding-left: 70px;
  display: grid;
  grid-template-columns: 65%;
  height: 1000px;
  width: 100%;
  background: #404040;
  color: white;
`;

export const Column1 = styled.div`
  padding: 30% 3% 0 5%;
`;

export const Column2 = styled.div``;

export const Heading = styled.h2`
  color: white;
  line-height: 50px;
  width: 616px;
  font-size: 50px;
  line-height: 64px;
`;

export const Content = styled.p`
  padding-top: 30px;
  width: 625px;
`;

export const Button = styled.button`
  color: white;
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  padding-left: 20px;
  margin-top: 40px;
  text-align: left;
  width: 13rem;
  height: 3.5rem;
  background: #7f7cff;
  border-radius: 0.75rem;
  border: none;
`;

export const AboutArrow = styled.img`
  height: 30%;
  padding-left: 20px;
  vertical-align: middle;
`;
