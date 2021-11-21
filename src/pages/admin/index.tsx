import { Container } from "@components/layouts";
import EducationEditor from "@components/sections/Education/EducationEditor";
import ExperienceEditor from "@components/sections/Experience/ExperienceEditor";
import ProfileEditor from "@components/sections/Profile/ProfileEditor";
import { useRouter } from "next/router";

export default function AdminPage() {
  const router = useRouter();
  if (process.env.NODE_ENV === "production" && typeof window !== "undefined") {
    alert("You can only edit this page in development mode");
    router.push("/");
  } else {
    return (
      <Container>
        <ProfileEditor />
        <ExperienceEditor />
        <EducationEditor />
      </Container>
    );
  }
}
