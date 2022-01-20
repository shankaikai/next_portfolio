import styled from "styled-components";

export const ExperienceContainer = styled.div`
  display: ${(props) => (props.active ? "flex" : "none")};
  flex-direction: column;
  row-gap: 10px;
`;
