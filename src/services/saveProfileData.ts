import axios from "axios";

export const saveProfileData = async (
  profile: TProfile
): Promise<{ message: string; profile: TProfile }> => {
  const { data } = await axios.post("/api/profile", profile);

  return data;
};
