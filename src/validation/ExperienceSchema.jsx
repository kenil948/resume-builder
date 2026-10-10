import * as yup from "yup";

export const ExperienceSchema = {
  experience: yup.array().of(
    yup.object({
      jobTitle: yup
        .string()
        .trim()
        .required("Job title is required")
        .min(3, "Minimum 3 characters")
        .max(100, "Maximum 100 characters"),

      company: yup
        .string()
        .trim()
        .required("Company is required")
        .min(3, "Minimum 3 characters")
        .max(100, "Maximum 100 characters"),

      startYear: yup
        .string()
        .trim()
        .required("Start year is required")
        .matches(/^\d{4}$/, "Enter a valid year")
        .test(
          "start-year",
          `Year must be between 1950 and ${new Date().getFullYear()}`,
          (value) => {
            if (!value) return false;
            const year = Number(value);
            const currentYear = new Date().getFullYear();
            return year >= 1950 && year <= currentYear;
          },
        ),

      endYear: yup
        .string()
        .required("End year is required")
        .test(
          "end-after-start",
          "End year must be after start year",
          (value, context) => {
            const { startYear } = context.parent;
            if (!value || !startYear) return true;
            return Number(value) >= Number(startYear);
          },
        ),

      description: yup
        .string()
        .trim()
        .required("Description is required")
        .min(3, "Minimum 10 characters")
        .max(700, "Maximum 700 characters"),
    }),
  ),
};
