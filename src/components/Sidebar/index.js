import React from "react";
import {
  SidebarContainer,
  Icon,
  ClosedIcon,
  SidebarMenu,
  SidebarWrapper,
  SidebarLink,
} from "./SidebarElements";

const index = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <ClosedIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">about</SidebarLink>
          <SidebarLink to="projects">projects</SidebarLink>
          <SidebarLink to="contact">contact</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default index;
