type TProfile = {
  name: string;
  title: string;
  from: string;
  description: string;
  experience: TExperience[];
};

type TExperience = {
  company: string;
  position: string;
};
