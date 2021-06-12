import React from "react";
import { InfoContainer, Heading, Content } from "./InfoElements";

const InfoSection = ({ id, headline, content }) => {
  return (
    <>
      <InfoContainer id={id}>
        <Heading>{headline}</Heading>
        <Content>{content}</Content>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
