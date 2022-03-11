import React from "react";
import { InfoContainer, Column, Heading, Content } from "./InfoElements";

const InfoSection = ({ id, headline, email, socials }) => {
  return (
    <>
      <InfoContainer id={id}>
        <Column>
          <Heading>{headline}</Heading>
          <Content>{email}</Content>
          <Content>
            {socials}
            <a
              href='https://www.linkedin.com/in/samanthacaesar/'
              target='_blank'
              rel='noopener noreferrer'
            >
              LinkedIn
            </a>{" "}
            /{" "}
            <a
              href='https://github.com/sammycaesar'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </a>
          </Content>
        </Column>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
