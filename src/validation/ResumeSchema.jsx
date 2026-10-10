import * as yup from "yup";
import { PersonalSchema } from "./PersonalSchema";
import { EducationSchema } from "./EducationSchema";
import { ExperienceSchema } from "./ExperienceSchema";
import { SkillsSchema } from "./SkillsSchema";

export const ResumeSchema = yup.object({
  ...PersonalSchema,
  ...EducationSchema,
  ...ExperienceSchema,
  ...SkillsSchema,
});
