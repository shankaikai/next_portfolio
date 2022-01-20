import Section from "../components/Section";
import Project from "../components/Project";
import { projects } from "../constants/constants";
import { RowContainer } from "../components/Section/SectionStyles";

export default function Projects() {
  return (
    <Section title="Projects">
      <RowContainer>
        {projects.map(
          ({ image, title, date, source, figma, descriptions, skills }) => (
            <Project
              key={title}
              image={image}
              title={title}
              date={date}
              source={source}
              figma={figma}
              descriptions={descriptions}
              skills={skills}
            />
          )
        )}
      </RowContainer>
    </Section>
  );
}
