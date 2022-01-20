import styled from "styled-components";

export const CompanyTitle = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  padding: 10px;
  cursor: pointer;
  border: ${(props) =>
    props.active ? "2px solid " + props.theme.colors.highlight : null};
  border-radius: 5px;
  color: ${(props) =>
    props.active
      ? props.theme.colors.highlight
      : props.theme.colors.secondary2};
  font-weight: ${(props) => (props.active ? 500 : 100)};
`;
