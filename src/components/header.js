import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.header`
  height: 60px;
  display: flex;
`;

const Left = styled.div`
  flex: 3;
  font-family: "Bebas";
  font-size: 60px;
  font-weight: bold;
  padding-left: 20px;
`;

const Right = styled.div`
  flex: 6;
  padding-right: 20px;
`;

const Nav = styled.nav`
  flex: 1;
`;

const NavList = styled.ul`
  display: flex;
  height: 60px;
  justify-content: flex-end;
  align-items: center;
`;

const NavListItem = styled.li`
  align-items: center;
`;

const StyledLink = styled(Link)`
  padding: 10px;
  text-decoration: none;
  font-family: "Bebas";
  font-size: 60px;
  font-weight: bold;
  color: black;
  &:hover {
    text-decoration: underline;
  }
  &.active {
    color: red;
  }
`;

const Header = () => (
  <Wrapper>
    <Left>JIMGBESTPHOTOGRAPHY</Left>
    <Right>
      <Nav>
        <NavList>
          <NavListItem>
            <StyledLink to="/">Home</StyledLink>
          </NavListItem>
          <NavListItem>
            <StyledLink to="/about">About</StyledLink>
          </NavListItem>
          <NavListItem>
            <StyledLink to="/images">Images</StyledLink>
          </NavListItem>
          <NavListItem>
            <StyledLink to="/blog">Blog</StyledLink>
          </NavListItem>
        </NavList>
      </Nav>
    </Right>
  </Wrapper>
);

export default Header;
