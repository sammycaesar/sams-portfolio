import React from "react";
import { InfoContainer, Column, Heading, Content } from "./InfoElements";

const InfoSection = ({ id, headline, email, socials }) => {
  return (
    <>
      <InfoContainer id={id}>
        <Column>
          <Heading>{headline}</Heading>
          <Content>{email}</Content>
          <Content>{socials}</Content>
        </Column>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
