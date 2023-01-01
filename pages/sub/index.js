import React from "react";
import styled from "styled-components";

const index = () => {
  return (
    <EntireWrap>
      <h1>/sub</h1>
      <a href="/">go back to main</a>
    </EntireWrap>
  );
};

const EntireWrap = styled.div`
  margin-top: 2rem;
  ${(props) => props.theme.align.flexCenterColumn};
`;

export default index;
