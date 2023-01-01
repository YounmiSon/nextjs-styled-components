import React from "react";
import styled from "styled-components";

const index = () => {
  return (
    <EntireWrap>
      <ContentTitle>router 예제</ContentTitle>
      <p>
        <a href="/sub">/sub</a>
      </p>
      <p>
        <a href="/sub/1">/sub/id</a>
      </p>
      <p>
        <a href="/sub/fetch">/sub/fetch</a>
      </p>
      <ContentTitle>theme 예제</ContentTitle>
      <ButtonWrap>
        <button>button</button>
        <button>button</button>
        <button>button</button>
      </ButtonWrap>
    </EntireWrap>
  );
};

const EntireWrap = styled.div`
  ${(props) => props.theme.align.flexCenterColumn};
`;

const ContentTitle = styled.h1`
  margin-top: 2rem;
`;

const ButtonWrap = styled.div`
  ${(props) => props.theme.align.flexCenterColumn};

  > :first-child {
    font-size: ${(props) => props.theme.fontSize.title};
    color: ${(props) => props.theme.color.mainColor};
  }
  > :nth-child(2) {
    font-size: ${(props) => props.theme.fontSize.subTitle};
    color: ${(props) => props.theme.color.subColor};
  }
  > :last-child {
    font-size: ${(props) => props.theme.fontSize.text};
    color: ${(props) => props.theme.color.fontColor};
  }
`;
export default index;
