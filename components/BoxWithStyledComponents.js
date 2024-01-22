import styled from "styled-components";

export const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) =>
    props.$backgroundcolor === "black" ? "black" : "green"};
  margin: 2rem;
  &:hover {
    background-color: red;
  }
`;
