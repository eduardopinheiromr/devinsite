import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import profile from "@content/profile.json";

import profileImage from "@images/avatar.png";

export default function Avatar() {
  return (
    <Flex
      justify="center"
      align="center"
      overflow="hidden"
      rounded="full"
      border="2px"
      borderColor="lightgray"
      w="full"
      h="full"
      maxW={48}
      maxH={48}
    >
      <Image
        src={profileImage}
        alt={"Foto de " + profile.name}
        objectFit="contain"
      />
    </Flex>
  );
}
