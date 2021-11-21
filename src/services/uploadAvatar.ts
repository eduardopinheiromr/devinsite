import axios from "axios";

export const uploadAvatar = async (
  avatar: any
): Promise<{ message: string }> => {
  const { data } = await axios.post("/api/upload", avatar);

  return data;
};
