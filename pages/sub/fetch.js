import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Fetch = () => {
  const [user, setUser] = useState({ name: null });
  useEffect(() => {
    // .env 파일에서 정의한 환경변수를 가져와서 쓸 수 있다
    fetch(process.env.NEXT_PUBLIC_API_URL + "api/hello")
      .then((type) => type.json())
      .then((result) => {
        setUser(result);
      });
  });
  return (
    <EntireWrap>
      <p>user.name : {user.name}</p>
      <a href="/">go back to main</a>
    </EntireWrap>
  );
};

const EntireWrap = styled.div`
  margin-top: 2rem;
  ${(props) => props.theme.align.flexCenterColumn};
`;

export default Fetch;
