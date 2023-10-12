import { CreatedWith, FilterCategories } from "./enums";

interface ICreatedWith {
  title: string;
  img: string;
  link: string;
}

interface IProject {
  id: number;
  title: string;
  img: string[];
  filter: FilterCategories[];
  color: string;
  createdWith: CreatedWith[];
  mobile: boolean;
  description: string;
  accWords: string[];
}

export type {IProject, ICreatedWith}