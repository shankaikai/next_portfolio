import Section from "../components/Section";
import {
  Image,
  RowContainer,
  SectionHighlight,
  SectionSubHeader,
  SectionText,
  Skill,
} from "../components/Section/SectionStyles";
import {
  introductionImages,
  highlightedSkills,
  skillsImages,
  personalityImages,
  socials,
} from "../constants/constants";

export default function AboutMe() {
  return (
    <Section title="About Me">
      <SectionSubHeader>Introduction</SectionSubHeader>
      <SectionText>
        Hi there, I am a graduate from the{" "}
        <SectionHighlight>SUTD-SMU Dual Degree Program</SectionHighlight> with
        bachelor&#39;s degrees in{" "}
        <SectionHighlight>Computer Science</SectionHighlight> and{" "}
        <SectionHighlight>Business Management</SectionHighlight> and graduated
        in September 2022. I am a full stack engineer, with a passion for
        building end-to-end products while adopting a user-centric perspective.
      </SectionText>
      <RowContainer center>
        {introductionImages.map(({ path, alt }) => (
          <Image key={alt} src={path} alt={alt} />
        ))}
      </RowContainer>
      <SectionSubHeader>Skills</SectionSubHeader>
      <SectionText>
        Here’s some <SectionHighlight>front-end</SectionHighlight> and{" "}
        <SectionHighlight>back-end </SectionHighlight> technologies that I have
        worked with in my various internships and projects:
      </SectionText>
      <RowContainer center>
        {highlightedSkills.map((skill) => (
          <Skill key={skill}>{skill}</Skill>
        ))}
      </RowContainer>
      <SectionText>
        I also possess some technical know-how in{" "}
        <SectionHighlight>UI/UX</SectionHighlight> design via university courses
        and self-learning and am able to comfortably use interface design tools
        like Figma.
      </SectionText>
      <SectionText>
        Alongside my academics, I took on{" "}
        <SectionHighlight>leadership</SectionHighlight> positions in my
        university&#39;s volunteering club, Uni-Y. I was the personal
        development director in 2019 and the president in 2020 where I took
        charge of the planning and execution of several events. In Janurary
        2019, I went to Maubin village in Myanmar to aid in road construction
        and hold workshops to teach English and Computer Skills.
      </SectionText>
      <RowContainer center>
        {skillsImages.map(({ path, alt }) => (
          <Image key={alt} src={path} alt={alt} />
        ))}
      </RowContainer>
      <SectionSubHeader>Culture</SectionSubHeader>
      <SectionText>
        Most would say that I am generally a{" "}
        <SectionHighlight>positive</SectionHighlight> person. Being a health
        advocate, I exercise regularly and participate in various sports. I also
        love travelling, singing, cooking and gaming.
      </SectionText>
      <RowContainer center>
        {personalityImages.map(({ path, alt }) => (
          <Image key={alt} src={path} alt={alt} />
        ))}
      </RowContainer>
      <SectionSubHeader>Connect with me</SectionSubHeader>
      <SectionText>
        To find out more about me, feel free to reach out on my{" "}
        <a href="socials.linkedin">LinkedIn</a> or drop me an email.
      </SectionText>
    </Section>
  );
}
