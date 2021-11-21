import { Box, useToast, Flex, Icon, Input, InputGroup } from "@chakra-ui/react";
import Image from "next/image";
import profile from "@content/profile.json";

import profileImage from "@images/avatar.png";
import { BiEditAlt } from "react-icons/bi";
import { isDevMode } from "src/utils/isDevMode";
import { createRef } from "react";
import { uploadAvatar } from "src/services/uploadAvatar";

export default function Avatar() {
  const avatarRef = createRef<HTMLInputElement>();

  const toast = useToast();

  const onUpload = async (event) => {
    if (avatarRef.current.value) {
      const file = avatarRef.current.files[0];

      const formData = new FormData();

      formData.append("avatar", file);

      avatarRef.current.value = "";

      await uploadAvatar(formData);

      toast({
        title: "Avatar atualizado",
        position: "top",
        status: "success",
      });
    }
  };
  return (
    <Flex w="full" h={48} maxW={48} maxH={48} position="relative">
      <Flex
        h="full"
        w="full"
        overflow="hidden"
        position="relative"
        rounded="full"
        border="2px"
        borderColor="lightgray"
      >
        <Image
          src={profileImage}
          alt={"Foto de " + profile.name}
          layout="fill"
          objectFit="contain"
        />
      </Flex>
      {isDevMode && (
        <Box
          as="label"
          cursor="pointer"
          fontSize="32px"
          position="absolute"
          right="0"
          bottom="0"
          zIndex="10"
          title="Alterar avatar"
        >
          <Input
            ref={avatarRef}
            onInput={onUpload}
            display="none"
            overflow="hidden"
            type="file"
          />
          <Icon as={BiEditAlt} />
        </Box>
      )}
    </Flex>
  );
}
