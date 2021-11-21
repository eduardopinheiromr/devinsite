import { Box, Flex, Grid, Heading, Input } from "@chakra-ui/react";
import { Button } from "@components/ui";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { saveProfileData } from "src/services/saveProfileData";
import { uploadAvatar } from "src/services/uploadAvatar";

import profile from "@content/profile.json";
import avatarImage from "@images/avatar.png";
import DescriptionEditor from "./DescriptionEditor";
import Avatar from "@components/ui/Avatar";

export default function ProfileEditor() {
  const [profileState, setProfileState] = useState<TProfile>(profile);

  const handleSaveProfile = async (event: FormEvent) => {
    event.preventDefault();
    const response = await saveProfileData(profileState);
    alert(response.message);
  };

  const handleSubmitAvatar = async (
    event: FormEvent & { target: { elements?: any } }
  ) => {
    event.preventDefault();

    const avatar = event.target.elements.image.files[0];

    const formData = new FormData();

    formData.append("avatar", avatar);

    const response = await uploadAvatar(formData);

    alert(response.message);
  };

  const disabled = process.env.NODE_ENV === "production";

  return (
    <>
      <Grid mt={16} gap={4} as="form" onSubmit={handleSaveProfile}>
        <Box>
          <Heading as="h3">Seu nome</Heading>
          <Input
            onChange={(event) =>
              setProfileState({ ...profileState, name: event.target.value })
            }
            defaultValue={profile.name}
            placeholder="Digite seu nome"
          />
        </Box>
        <Box>
          <Heading as="h3">Seu título</Heading>
          <Input
            onChange={(event) =>
              setProfileState({ ...profileState, title: event.target.value })
            }
            defaultValue={profile.title}
            placeholder="Digite seu título"
          />
        </Box>
        <Box>
          <Heading as="h3">De onde você é:</Heading>
          <Input
            onChange={(event) =>
              setProfileState({ ...profileState, from: event.target.value })
            }
            defaultValue={profile.from}
            placeholder="Ex: São Paulo, SP"
          />
        </Box>
        <Button mt={4} type="submit" disabled={disabled}>
          Salvar
        </Button>
      </Grid>
      <Box my={8} textAlign="center">
        <Heading as="h3">Avatar</Heading>
        <Flex
          style={{ gap: 32 }}
          justify="center"
          align="center"
          as="form"
          onSubmit={handleSubmitAvatar}
        >
          <Avatar />
          <Box>
            <Input mb={4} name="image" type="file" />
            <Button disabled={disabled}>Salvar avatar</Button>
          </Box>
        </Flex>
      </Box>
      <DescriptionEditor />
    </>
  );
}
