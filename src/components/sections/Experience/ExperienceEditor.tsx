import React, { useState } from "react";
import profile from "@content/profile.json";
import { Box, Heading, Input } from "@chakra-ui/react";
import { saveProfileData } from "src/services/saveProfileData";
import { Button } from "@components/ui";

const newExperienceInitialState = {
  company: "",
  position: "",
};

export default function ExperienceEditor() {
  const [newExperience, setNewExperience] = useState<TExperience>(
    newExperienceInitialState
  );

  const saveNewEducation = async () => {
    const experience = [...(profile.experience ?? []), newExperience];
    const response = await saveProfileData({ ...profile, experience });
    setNewExperience(newExperienceInitialState);

    alert(response.message);
  };

  const disabled = process.env.NODE_ENV === "production";

  return (
    <div>
      <Box>
        <Heading as="h3">Nome da empresa</Heading>
        <Input
          value={newExperience.company}
          onChange={(event) =>
            setNewExperience({ ...newExperience, company: event.target.value })
          }
          placeholder="Ex: Facebook"
        />
      </Box>
      <Box>
        <Heading as="h3">Seu cargo</Heading>
        <Input
          value={newExperience.position}
          onChange={(event) =>
            setNewExperience({ ...newExperience, position: event.target.value })
          }
          placeholder="Ex: Front End Developer"
        />
      </Box>
      <Button mt={4} onClick={saveNewEducation} disabled={disabled}>
        Adicionar experiência
      </Button>
    </div>
  );
}
