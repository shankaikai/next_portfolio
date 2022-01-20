import React from "react";
import {
  ProjectDescription,
  ProjectDescriptionList,
  SkillsContainer,
} from "../Project/ProjectStyles";
import {
  SectionHighlight,
  SectionSubHeader,
  Skill,
} from "../Section/SectionStyles";
import { ExperienceContainer } from "./ExperienceDetailsStyles";

export default function ExperienceDetails({
  title,
  date,
  descriptions,
  skills,
  active,
}) {
  return (
    <ExperienceContainer active={active}>
      <SectionSubHeader>{title}</SectionSubHeader>
      <SectionHighlight>{date}</SectionHighlight>
      <ProjectDescriptionList>
        {descriptions.map((description) => (
          <ProjectDescription key={description}>
            {description}
          </ProjectDescription>
        ))}
      </ProjectDescriptionList>
      <SkillsContainer>
        {skills.map((skill) => (
          <Skill key={skill}>{skill}</Skill>
        ))}
      </SkillsContainer>
    </ExperienceContainer>
  );
}
