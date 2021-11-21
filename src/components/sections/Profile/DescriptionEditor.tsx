import { Button } from "@components/ui";
import profile from "@content/profile.json";
import { saveProfileData } from "src/services/saveProfileData";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { Box, Heading } from "@chakra-ui/react";

export default function DescriptionEditor() {
  const [richText, setRichText] = useState(profile.description);

  const handleSaveDescription = async () => {
    const response = await saveProfileData({
      ...profile,
      description: richText,
    });
    alert(response.message);
  };
  return (
    <Box my={8}>
      <Heading mb={4} as="h3">
        Descrição
      </Heading>
      <ReactQuill value={richText} onChange={(value) => setRichText(value)} />
      <Button mt={4} onClick={() => handleSaveDescription()}>
        Salvar descrição
      </Button>
    </Box>
  );
}
