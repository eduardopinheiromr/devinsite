import { Box, Flex, Heading } from "@chakra-ui/react";

import profile from "@content/profile.json";
import { Container } from "@components/layouts";
import Avatar from "@components/ui/Avatar";

import Editable from "@components/ui/Editable";

export default function Hero() {
  return (
    <Container>
      <Flex style={{ gap: 16 }} justify="center" my={16}>
        <Avatar />
        <Box w="full">
          <Editable
            contentKey="name"
            component={<Heading as="h1">{profile.name}</Heading>}
          />
          <Editable
            contentKey="title"
            component={
              <Heading as="h2" fontSize="22px" my={4}>
                {profile.title}
              </Heading>
            }
          />
          <Editable
            contentKey="from"
            component={
              <Heading as="h3" fontSize="18px" color="gray">
                {profile.from}
              </Heading>
            }
          />
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
