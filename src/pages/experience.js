import Section from "../components/Section";
import { RowContainer } from "../components/Section/SectionStyles";
import { experiences } from "../constants/constants";
import { useState } from "react";
import Company from "../components/Company";
import ExperienceDetails from "../components/ExperienceDetails";

export default function Experience() {
  const [active, setActive] = useState("Indeed");
  const handleClick = (company) => {
    setActive(company);
  };

  return (
    <Section title="Experience">
      <RowContainer>
        {experiences.map(({ company, icon }) => (
          <Company
            key={company}
            active={active === company}
            icon={icon}
            company={company}
            onClick={() => handleClick(company)}
          />
        ))}
      </RowContainer>
      {experiences.map(({ company, title, date, descriptions, skills }) => (
        <ExperienceDetails
          key={title}
          active={active === company}
          title={title}
          date={date}
          descriptions={descriptions}
          skills={skills}
        />
      ))}
    </Section>
  );
}
