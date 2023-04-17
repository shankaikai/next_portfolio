import Section from "../components/Section";
import { RowContainer } from "../components/Section/SectionStyles";
import { experiences } from "../constants/constants";
import { useState } from "react";
import Company from "../components/Company";
import ExperienceDetails from "../components/ExperienceDetails";

export default function Experience() {
  const [active, setActive] = useState(3);
  const handleClick = (id) => {
    setActive(id);
  };

  return (
    <Section title="Experience">
      <RowContainer>
        {experiences.map(({ id, company, icon }) => (
          <Company
            key={id}
            active={active === id}
            icon={icon}
            company={company}
            onClick={() => handleClick(id)}
          />
        ))}
      </RowContainer>
      {experiences.map(({ id, company, title, date, descriptions, skills }) => (
        <ExperienceDetails
          key={title}
          active={active === id}
          title={title}
          date={date}
          descriptions={descriptions}
          skills={skills}
        />
      ))}
    </Section>
  );
}
