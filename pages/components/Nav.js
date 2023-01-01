import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <>
      <NavBar>
        <PageTitle>Next.js Styled-Components Setting</PageTitle>
      </NavBar>
    </>
  );
};

const NavBar = styled.div`
  width: 100vw;
  height: 10vh;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageTitle = styled.h1``;

export default Nav;
