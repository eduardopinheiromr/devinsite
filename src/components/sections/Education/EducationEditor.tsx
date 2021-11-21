import React, { useState } from "react";
import profile from "@content/profile.json";
import { Box, Heading, Input } from "@chakra-ui/react";
import { saveProfileData } from "src/services/saveProfileData";
import { Button } from "@components/ui";

const newEducationInitialState = {
  institution: "",
  course: "",
  startDate: "",
  endDate: "",
  description: "",
};

export default function EducationEditor() {
  const [newEducation, setNewEducation] = useState<TEducation>(
    newEducationInitialState
  );

  const saveNewCompany = async () => {
    const education = [...(profile.education ?? []), newEducation];
    const response = await saveProfileData({ ...profile, education });
    setNewEducation(newEducationInitialState);

    alert(response.message);
  };

  const disabled = process.env.NODE_ENV === "production";

  return (
    <div>
      <Box my={8}>
        <Heading as="h3" mb={4}>
          Educação
        </Heading>
        <Heading as="h4">Nome da instituição</Heading>
        <Input
          value={newEducation.institution}
          onChange={(event) =>
            setNewEducation({
              ...newEducation,
              institution: event.target.value,
            })
          }
          placeholder="Ex: Resilia Educação"
        />
      </Box>
      <Box>
        <Heading as="h4">Nome do curso</Heading>
        <Input
          value={newEducation.course}
          onChange={(event) =>
            setNewEducation({ ...newEducation, course: event.target.value })
          }
          placeholder="Ex: Desenvolvimento Web Fullstack"
        />
      </Box>

      <Button mt={4} onClick={saveNewCompany} disabled={disabled}>
        Adicionar educação
      </Button>
    </div>
  );
}
