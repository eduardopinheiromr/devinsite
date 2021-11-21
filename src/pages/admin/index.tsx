import { Container } from "@components/layouts";
import EducationEditor from "@components/sections/Education/EducationEditor";
import ExperienceEditor from "@components/sections/Experience/ExperienceEditor";
import ProfileEditor from "@components/sections/Profile/ProfileEditor";

export default function AdminPage() {
  return (
    <Container>
      <ProfileEditor />
      <ExperienceEditor />
      <EducationEditor />
    </Container>
  );
}
