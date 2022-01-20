import styled from "styled-components";

export const NavLink = styled.a`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  column-gap: 20px;
  padding: 5px;
  align-items: center;

  &:visited {
    color: inherit;
  }
`;

export const NavTitle = styled.span`
  font-weight: ${(props) => (props.active ? 400 : 100)};
  font-size: 16px;
  colour: ${(props) => props.theme.colors.primary};
`;
