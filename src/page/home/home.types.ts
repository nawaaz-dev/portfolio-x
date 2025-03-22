import { IPostCommon } from "@nawaaz-dev/portfolio-types";

export enum TabsEnum {
  Experience = "experience",
  TechStack = "tech_stack",
  Project = "project",
  Education = "education",
}

export type ExperienceType = IPostCommon<{
  company: string;
  location: string;
  roles: string[];
}>;

export type TechStackType = IPostCommon<{
  specialies: string[];
}>;

export type ProjectType = IPostCommon<{
  position: string;
  duration: string;
  techStack: string[];
  responsibilities: string[];
  images: string[];
}>;

export type EducationType = IPostCommon<{
  degree: string;
  institution: string;
  duration: string;
  location: string;
  description: string;
}>;
