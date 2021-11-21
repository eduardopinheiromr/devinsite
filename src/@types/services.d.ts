type TProfile = {
  name: string;
  title: string;
  from: string;
  description: string;
  experience: TExperience[];
  education: TEducation[];
};

type TExperience = {
  company: string;
  position: string;
};

type TEducation = {
  institution: string;
  course: string;
  startDate: string;
  endDate: string;
  description: string;
};
