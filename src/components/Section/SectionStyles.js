import styled from "styled-components";

export const SectionContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 40px;
  row-gap: 10px;
  max-width: 1200px;
  justify-self: center;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 30px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 20px;
    border-radius: 0;
  }
`;

export const SectionHeader = styled.h1`
  font-weight: 500;
  font-size: 36px;
`;

export const SectionDivider = styled.hr`
  background-color: ${(props) => props.theme.colors.secondary};
  margin-top: 5px;
  margin-bottom: 5px;
  height: 1px;
  width: 100%;
  border: none;
`;

export const SectionSubHeader = styled.h2`
  text-transform: uppercase;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 20px;
`;

export const SectionText = styled.p`
  font-weight: 300;
  line-height: 1.5em;
`;

export const SectionHighlight = styled.p`
  font-weight: 500;
  display: inline;
  color: ${(props) => props.theme.colors.highlight};
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  row-gap: ${(props) => (props.gap ? props.gap : "10px")};
  width: auto;
  justify-content: ${(props) => (props.center ? "center" : "none")};
  flex-wrap: wrap;
  justify-self: center;
`;

export const Image = styled.img`
  height: 180px;
  width: 180px;
  border-radius: 5px;
  object-fit: cover;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
`;

export const Skill = styled.span`
  font-weight: 300;
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 10px;
  border-radius: 5px;
`;
