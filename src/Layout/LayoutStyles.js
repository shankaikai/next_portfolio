import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 250px;
  padding: 60px;

  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 30px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0px;
    margin-left: 0px;
  }
`;
