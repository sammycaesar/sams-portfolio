import styled from "styled-components";

export const AboutContainer = styled.div`
  padding-left: 5%;
  padding-right: 5%;
  width: 100%;
  background: #e8eefe;
  color: #7f7cff;
  display: grid;
  white-space: pre-line;
  vertical-align: bottom;
`;

export const IntroContainer = styled.div`
  height: 450px;
  padding-top: 10%;
  display: grid;
  grid-template-columns: 60%;
`;

export const IntroContent = styled.p`
  line-height: 40px;
  font-size: 20px;
  color: #404040;
`;

export const CapabilitiesContainer = styled.div`
  margin-top: 5%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  border-top-style: solid;
  border-width: 5px;
  border-color: #7f7cff;
  border-radius: 5px;
  padding: 5% 2% 0 2%;
  height: 350px;
  background-color: white;
`;

export const Heading = styled.h2`
  color: #7f7cff;
  font-size: 50px;
  line-height: 50px;
  width: 600px;
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  border-top-style: solid;
  border-width: 5px;
  border-color: #7f7cff;
  border-radius: 5px;
  padding: 5% 2% 0 2%;
  height: 350px;
  background-color: white;
`;

export const Education = styled.p`
  padding-top: 30px;
  color: #7f7cff;
`;
