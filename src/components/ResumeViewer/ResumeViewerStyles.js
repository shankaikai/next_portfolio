import styled from "styled-components";

export const ResumeObject = styled.object`
  width: 100%;
  height: 800px;

  @media ${(props) => props.theme.breakpoints.lg} {
    height: 600;
  }
`;
