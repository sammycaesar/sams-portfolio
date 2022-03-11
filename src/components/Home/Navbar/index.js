import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLeft,
  NavLogo,
  NavJob,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLeft>
            <NavLogo to='/'>samantha caesar</NavLogo>
            <NavJob>front end developer</NavJob>
          </NavLeft>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='projects'>projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='about'>about</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='contact'>contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
