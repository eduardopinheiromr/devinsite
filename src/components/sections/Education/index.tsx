import { Flex, Heading } from "@chakra-ui/react";
import { Container } from "@components/layouts";
import profile from "@content/profile.json";

export default function Education() {
  return (
    <Container>
      <Heading as="h2">Educação</Heading>
      {profile.education.map((education, key) => (
        <Flex key={key}>
          {education.institution} - {education.course}
        </Flex>
      ))}
    </Container>
  );
}
