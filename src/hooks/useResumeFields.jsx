import useEditableField from "./useEditableField";

const useResumeFields = () => {
  return {
    fullName: useEditableField({
      section: "personal",
      field: "fullName",
    }),

    professionalTitle: useEditableField({
      section: "personal",
      field: "professionalTitle",
    }),

    email: useEditableField({
      section: "personal",
      field: "email",
    }),

    phone: useEditableField({
      section: "personal",
      field: "phone",
    }),

    location: useEditableField({
      section: "personal",
      field: "location",
    }),

    portfolio: useEditableField({
      section: "personal",
      field: "portfolio",
    }),

    github: useEditableField({
      section: "personal",
      field: "github",
    }),

    linkedin: useEditableField({
      section: "personal",
      field: "linkedin",
    }),

    sidebar: useEditableField({
      section: "personal",
      field: "sidebar",
    }),

    header: useEditableField({
      section: "personal",
      field: "header",
    }),

    degree: useEditableField({
      section: "education",
      field: "degree",
    }),

    institution: useEditableField({
      section: "education",
      field: "institution",
    }),

    graduationYear: useEditableField({
      section: "education",
      field: "graduationYear",
    }),

    gpa: useEditableField({
      section: "education",
      field: "gpa",
    }),

    professionalSummary: useEditableField({
      section: "professionalSummary",
      field: "professionalSummary",
    }),

    jobTitle: useEditableField({
      section: "experience",
      field: "jobTitle",
    }),

    company: useEditableField({
      section: "experience",
      field: "company",
    }),

    startYear: useEditableField({
      section: "experience",
      field: "startYear",
    }),

    endYear: useEditableField({
      section: "experience",
      field: "endYear",
    }),

    description: useEditableField({
      section: "experience",
      field: "description",
    }),
  };
};

export default useResumeFields;
