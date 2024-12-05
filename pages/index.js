import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithStyledComponents";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
`;

export default function HomePage() {
  return (
    <StyledDiv>
      <BoxWithClassName />
      <BoxWithClassName $isBlack />
      <BoxWithStyledComponents/>
      <BoxWithStyledComponents $isBlack />
    </StyledDiv>
  );
}
