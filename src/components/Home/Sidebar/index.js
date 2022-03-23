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
          <SidebarLink to='about' onClick={toggle}>
            about
          </SidebarLink>
          <SidebarLink to='projects' onClick={toggle}>
            projects
          </SidebarLink>
          <SidebarLink to='contact' onClick={toggle}>
            contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default index;
