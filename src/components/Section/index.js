import {
  SectionContainer,
  SectionHeader,
  SectionDivider,
  SectionSubHeader,
  SectionText,
} from "./SectionStyles";

export default function Section({ title, children }) {
  return (
    <SectionContainer>
      <SectionHeader>{title}</SectionHeader>
      <SectionDivider />
      {children}
    </SectionContainer>
  );
}
