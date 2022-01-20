import ResumeViewer from "../components/ResumeViewer";
import Section from "../components/Section";

export default function Resume() {
  return (
    <Section title="Resume">
      <ResumeViewer data="/documents/resume.pdf" />
    </Section>
  );
}
