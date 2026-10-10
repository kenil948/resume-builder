import * as yup from "yup";

export const EducationSchema = {
  education: yup.array().of(
    yup.object({
      degree: yup
        .string()
        .trim()
        .required("Degree / Certificate is required")
        .min(3, "Degree must be at least 3 characters")
        .max(100, "Degree must be at most 100 characters"),

      institution: yup
        .string()
        .trim()
        .required("School / University is required")
        .min(3, "Institution name must be at least 3 characters")
        .max(100, "Institution name must be at most 100 characters"),

      graduationYear: yup
        .string()
        .trim()
        .required("Graduation year is required")
        .matches(/^\d{4}$/, "Enter a valid 4-digit year")
        .test(
          "valid-year",
          `Year must be between 1950 and ${new Date().getFullYear()}`,
          (value) => {
            if (!value) return false;
            const year = Number(value);
            const currentYear = new Date().getFullYear();
            return year >= 1950 && year <= currentYear + 5;
          },
        ),

      gpa: yup
        .string()
        .trim()
        .notRequired()
        .test("gpa", "GPA must be between 0 and 10", (value) => {
          if (!value) return true;
          const gpa = Number(value);
          return !isNaN(gpa) && gpa >= 0 && gpa <= 10;
        }),
    }),
  ),
};
