import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  position: relative;
  top: 0;
  margin: 0 5% 0 5%;
  padding-top: 2%;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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
`;

export const NavJob = styled.div`
  font-size: 2.5rem;
  line-height: 50px;

  align-items: center;
  font-weight: regular;
  font-family: "Space Grotesk", sans-serif;
  color: #404040;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  } ;
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  display: flex;
  text-decoration: none;
  padding: 0 2.5rem;
  height: 100%;
  cursor: pointer;

  &:active {
    border-bottom: 3px solid #7f7cff;
  }

  &:hover {
    color: #7f7cff;
    transition: 0.2s ease-in-out;
  }
`;
