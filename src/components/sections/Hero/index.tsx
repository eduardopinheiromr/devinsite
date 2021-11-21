import { Box, Flex, Heading } from "@chakra-ui/react";

import profile from "@content/profile.json";
import { Container } from "@components/layouts";
import Avatar from "@components/ui/Avatar";

export default function Hero() {
  return (
    <Container>
      <Flex style={{ gap: 16 }} justify="center" my={16}>
        <Avatar />
        <Box>
          <Heading as="h1">{profile.name}</Heading>
          <Heading as="h2" fontSize="22px" my={4}>
            {profile.title}
          </Heading>
          <Heading as="h3" fontSize="18px" color="gray">
            {profile.from}
          </Heading>
        </Box>
      </Flex>
      <Flex
        my={16}
        justify="center"
        dangerouslySetInnerHTML={{ __html: profile.description }}
      />
    </Container>
  );
}
