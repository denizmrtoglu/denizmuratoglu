export type IProject = {
  title: string;
  description: string;
};

export type IWorkExperience = {
  title: string;
  period: string;
  position: string;
  projects: IProject[];
};

export type IAdditionalExperience = {
  title: string;
  period: string;
  position: string;
  description: string;
};

export type ResumeDTO = {
  workExperiences: IWorkExperience[];
  additionalExperiences: IAdditionalExperience[];
  summary: string;
  skills: string[];
};
