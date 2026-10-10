import * as yup from "yup";

export const SkillsSchema = {
  skills: yup
    .string()
    .trim()
    .required("Skills are required")
    .test("skills", "Enter at least one skill", (value) => {
      if (!value) return false;
      return (
        value
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean).length > 0
      );
    })
    .test("max-skills", "Maximum 30 skills allowed", (value) => {
      if (!value) return true;
      return (
        value
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean).length <= 30
      );
    }),
};
