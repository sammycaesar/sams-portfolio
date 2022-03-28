import React from "react";
import { InfoContainer, InfoBox, Heading, Content } from "./InfoElements";

function InfoSection({ id, headline, email, socials }) {
  return (
    <>
      <InfoContainer id={id}>
        <InfoBox>
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
        </InfoBox>
      </InfoContainer>
    </>
  );
}

export default InfoSection;
