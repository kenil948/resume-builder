import * as yup from "yup";

export const PersonalSchema = {
  fullName: yup
    .string()
    .trim()
    .required("Full name is required")
    .min(3, "Name must be at least 3 characters")
    .max(70, "Name must be at most 70 characters"),

  email: yup
    .string()
    .trim()
    .required("Email is required")
    .email("Invalid email address"),

  location: yup
    .string()
    .trim()
    .required("Location is required")
    .min(3, "Location must be at least 3 characters")
    .max(70, "Location must be at most 70 characters"),

  professionalTitle: yup
    .string()
    .trim()
    .required("Professional title is required")
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title must be at most 100 characters"),

  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Enter a valid 10-digit phone number"),

  portfolio: yup
    .string()
    .trim()
    .notRequired()
    .test("portfolio-url", "Enter a valid portfolio URL", (value) => {
      if (!value) return true;
      return /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/.test(value);
    }),

  github: yup
    .string()
    .trim()
    .notRequired()
    .test("github-url", "Enter a valid GitHub URL", (value) => {
      if (!value) return true;
      return /^https?:\/\/(www\.)?github\.com\/[A-Za-z0-9_-]+\/?$/.test(value);
    }),

  linkedin: yup
    .string()
    .trim()
    .notRequired()
    .test("linkedin-url", "Enter a valid LinkedIn URL", (value) => {
      if (!value) return true;
      return /^https?:\/\/(www\.)?linkedin\.com\/in\/[A-Za-z0-9-_%]+\/?$/.test(value);
    }),

  professionalSummary: yup
    .string()
    .trim()
    .required("Professional summary is required")
    .min(10, "Summary must be at least 10 characters")
    .max(700, "Summary must be at most 700 characters"),
};
