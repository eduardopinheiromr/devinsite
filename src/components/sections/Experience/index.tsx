import { Flex, Heading } from "@chakra-ui/react";
import { Container } from "@components/layouts";
import profile from "@content/profile.json";

export default function Experience() {
  return (
    <Container>
      <Heading as="h2">Experiência</Heading>
      {profile.experience.map((experience, key) => (
        <Flex key={key}>
          {experience.company} - {experience.position}
        </Flex>
      ))}
    </Container>
  );
}
