import { Button, Flex, useToast, Icon, Input } from "@chakra-ui/react";
import { useState } from "react";
import { saveProfileData } from "src/services/saveProfileData";
import { BiEditAlt } from "react-icons/bi";
import { RiSave3Fill } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";

import profile from "@content/profile.json";

type Props = {
  component: JSX.Element;
  contentKey: string;
};

export default function Editable({ component, contentKey }: Props) {
  const [editMode, setEditMode] = useState("");
  const [editedContent, setEditedContent] = useState("");
  const toast = useToast();
  const isDevMode = process.env.NODE_ENV === "development";

  if (!isDevMode) return component;

  const handleEditMode = (content: string) => {
    setEditMode(content);
    setEditedContent(profile[content]);
  };

  const cancelEdit = () => {
    setEditMode("");
    setEditedContent("");
  };

  const saveEditedContent = async () => {
    const newProfile = { ...profile };
    newProfile[editMode] = editedContent;

    const response = await saveProfileData(newProfile);

    toast({
      title: "O campo " + contentKey + " foi atualizado",
      position: "top",
      status: "success",
    });

    setEditMode("");
    setEditedContent("");
  };

  return (
    <Flex
      position="relative"
      bg={editMode === contentKey ? "black" : "white"}
      color={editMode !== contentKey ? "black" : "white"}
      rounded="md"
      align="center"
      my={(editMode === contentKey && component.props.my) ?? "0"}
    >
      {editMode !== contentKey && component}
      {isDevMode && editMode === contentKey && (
        <Input
          h={50}
          lineHeight={1.2}
          fontSize={component.props.fontSize ?? "22px"}
          border="0"
          d="flex"
          px={1}
          alignItems="center"
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
        />
      )}
      {isDevMode && (
        <Button
          position="absolute"
          right="10"
          onClick={() =>
            editMode === contentKey ? cancelEdit() : handleEditMode(contentKey)
          }
          title={
            editMode === contentKey
              ? "Cancelar edição"
              : "Editar o campo " + contentKey
          }
          zIndex="10"
        >
          <Icon as={editMode === contentKey ? MdOutlineCancel : BiEditAlt} />
        </Button>
      )}
      {isDevMode && editMode === contentKey && (
        <Button
          position="absolute"
          right="0"
          zIndex="10"
          onClick={() => saveEditedContent()}
        >
          <Icon as={RiSave3Fill} />
        </Button>
      )}
    </Flex>
  );
}
