import { useRouter } from "next/dist/client/router";
import styled from "styled-components";

const id = () => {
  const router = useRouter();
  const id = Number(router.query.id);
  return (
    <EntireWrap>
      <h1>/sub/id</h1>
      <div>id : {id}</div>
      <a href="/">go back to main</a>
    </EntireWrap>
  );
};

const EntireWrap = styled.div`
  margin-top: 2rem;
  ${(props) => props.theme.align.flexCenterColumn};
`;

export default id;
