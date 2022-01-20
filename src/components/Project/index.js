import { Icon } from "@iconify/react";
import { SocialLink } from "../Navbar/NavbarStyles";
import {
  SectionHighlight,
  SectionSubHeader,
  Skill,
} from "../Section/SectionStyles";
import {
  ProjectContainer,
  ProjectDescription,
  ProjectDescriptionList,
  ProjectImage,
  ProjectLinks,
  SkillsContainer,
} from "./ProjectStyles";

export default function Project({
  image,
  title,
  date,
  source,
  figma,
  descriptions,
  skills,
}) {
  return (
    <ProjectContainer>
      <ProjectImage src={image} />
      <SectionSubHeader>{title}</SectionSubHeader>
      <SectionHighlight>{date}</SectionHighlight>
      <ProjectLinks>
        <SocialLink href={source} target="_blank">
          <Icon icon="akar-icons:github-fill" height="25px" display={"block"} />
        </SocialLink>
        {figma ? (
          <SocialLink href={figma} target="_blank">
            <Icon icon="cib:figma" height="25px" display={"block"} />
          </SocialLink>
        ) : null}
      </ProjectLinks>
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
    </ProjectContainer>
  );
}
