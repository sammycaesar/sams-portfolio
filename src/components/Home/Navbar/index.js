import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";

import {
  Nav,
  NavbarContainer,
  NavLeft,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";

function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLeft>
            <NavLogo to='/'>sc</NavLogo>
          </NavLeft>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks>
                {" "}
                <Link
                  activeClass='active'
                  to='projects'
                  spy={true}
                  smooth={true}
                  offset={10}
                  duration={600}
                  delay={50}
                >
                  projects
                </Link>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>
                {" "}
                <Link
                  activeClass='active'
                  to='about'
                  spy={true}
                  smooth={true}
                  offset={10}
                  duration={600}
                  delay={50}
                >
                  about{" "}
                </Link>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>
                {" "}
                <Link
                  activeClass='active'
                  to='contact'
                  spy={true}
                  smooth={true}
                  offset={10}
                  duration={600}
                  delay={50}
                >
                  contact{" "}
                </Link>
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
