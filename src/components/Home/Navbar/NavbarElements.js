import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Nav = styled.nav`
  height: 100px;
  max-width: 1200px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  padding: 4em 1em;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  position: relative;
  top: 0;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 950px) {
    height: 200px;
    padding: 0;
  } ;
`;

export const NavLeft = styled.div`
  display: grid;
`;

export const NavLogo = styled(LinkR)`
  cursor: pointer;
  font-size: 2.5rem;
  line-height: 50px;
  align-items: center;
  font-weight: regular;
  font-family: "Space Grotesk", sans-serif;
  color: #b3a5d9;
  text-decoration: none;

  @media screen and (max-width: 950px) {
    display: none;
  }
`;

export const NavJob = styled.div`
  font-size: 2.5rem;
  line-height: 50px;
  align-items: center;
  font-weight: regular;
  font-family: "Space Grotesk", sans-serif;
  color: #404040;

  @media screen and (max-width: 950px) {
    font-size: 1.5rem;
    line-height: 20px;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 950px) {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0%);
    font-size: 2rem;
    cursor: pointer;
    color: #b3a5d9;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  list-style: none;

  @media screen and (max-width: 950px) {
    display: none;
  } ;
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled.div`
  display: flex;
  text-decoration: none;
  padding: 0 2.5rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #7f7cff;
    transition: 0.4s ease-in-out;
  }
`;
