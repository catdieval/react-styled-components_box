// import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import { StyledBox } from "@/components/BoxWithStyledComponents";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
`;

export default function HomePage() {
  return (
    <StyledDiv>
      <StyledBox $backgroundcolor="green" />
      <StyledBox $backgroundcolor="black" />
    </StyledDiv>
  );
}
