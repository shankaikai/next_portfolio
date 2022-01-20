import styled from "styled-components";

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: calc(50% - 15px);
  margin: 5px;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 5px;
  object-fit: cover;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
`;

export const ProjectLinks = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
`;

export const ProjectDescriptionList = styled.ul`
  color: ${(props) => props.theme.colors.highlight};
  list-style: none;
`;

export const ProjectDescription = styled.li`
  font-weight: 300;
  color: ${(props) => props.theme.colors.primary};
  padding-left: 20px;
  position: relative;
  padding-left: 30px;
  margin-bottom: 10px;

  &::before {
    content: "▹";
    position: absolute;
    left: 0px;
    width: 20px;
    color: ${(props) => props.theme.colors.highlight};
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 10px;
  width: 100%;
`;
