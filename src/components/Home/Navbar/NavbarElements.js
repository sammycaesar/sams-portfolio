import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  display: flex;
  height: 100px;
  max-width: 1600px;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  position: relative;
  top: 0;
  margin: auto;
  z-index: 100;
  background-color: #fffdfb;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 480px) {
    height: 5rem;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 4em 4em 0em 4em;
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
  color: #7f7cff;
  text-decoration: none;

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const NavJob = styled.div`
  font-size: 2.5rem;
  line-height: 50px;
  align-items: center;
  font-weight: regular;
  font-family: "Space Grotesk", sans-serif;
  color: #404040;

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
    line-height: 20px;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1rem;
    cursor: pointer;
    color: #7f7cff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 1024px) {
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
