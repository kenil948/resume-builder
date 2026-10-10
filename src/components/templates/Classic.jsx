// import React from "react";
import useEditableField from "../../hooks/useEditableField";
import { useResumeEditor } from "../../hooks/useResumeEditor";
import useResumeFields from "../../hooks/useResumeFields";
import { getSkillsArray, defaultSkills } from "../common/SkillHelpers";

const ClassicSkillTag = ({ skill, index }) => {
  const editableSkill = useEditableField({
    section: "skills",
    index,
    field: "skill",
  });
  return (
    <span
      {...editableSkill}
      className={`px-2 py-1 rounded bg-[#e2e8f0] text-[#2d3748] text-xs ${editableSkill.className || ""}`}
    >
      {skill}
    </span>
  );
};

const Classic = ({ resumeData }) => {
  const { isEditMode } = useResumeEditor();
  const details = useResumeFields();

  const skillsArray = getSkillsArray(resumeData.skills);
  const displaySkills = skillsArray.length > 0 ? skillsArray : defaultSkills;
  return (
    <div className="w-full min-h-screen print:min-h-screen shadow-lg bg-white overflow-hidden">
      <div
        {...details.header}
        className={`w-full bg-[#1A2744] px-10 py-5 text-[#FFFFFF] ${details.header.className || ""}`}
      >
        <div onClick={(e) => e.stopPropagation()}>
          <h1
            {...details.fullName}
            className={`text-4xl capitalize font-bold ${details.fullName.className || ""}`}
          >
            {resumeData.fullName || "Alexandara chen"}
          </h1>
          <p
            {...details.professionalTitle}
            className={`uppercase tracking-wider mt-2 text-sm text-[#ffffffb3] ${details.professionalTitle.className || ""}`}
          >
            {resumeData.professionalTitle || "senior product designer"}
          </p>
        </div>
      </div>

      <div className="flex min-h-screen print:min-h-[89vh]">
        <div
          {...details.sidebar}
          className={`w-[35%] bg-[#F0F4F8] px-8 py-5 ${details.sidebar.className || ""}`}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#1a2744]">
                Contact
              </h2>

              <div className="flex flex-col gap-1 mt-2 text-xs text-[#4a5568]">
                <p {...details.email} className={details.email.className || ""}>
                  {resumeData.email || "alex.chen@email.com"}
                </p>

                <p {...details.phone} className={details.phone.className || ""}>
                  {resumeData.phone || "+1 (555) 234-5678"}
                </p>

                <p
                  {...details.location}
                  className={details.location.className || ""}
                >
                  {resumeData.location || "San Francisco, CA"}
                </p>
              </div>
            </div>
            <div className="mt-5">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#1a2744]">
                Links
              </h2>

              <div className="flex flex-col gap-2 mt-2 text-xs text-[#4a5568]">
                {resumeData.portfolio ? (
                  <a
                    {...details.portfolio}
                    href={isEditMode ? undefined : resumeData.portfolio}
                    target={isEditMode ? undefined : "_blank"}
                    rel="noreferrer"
                    className={`hover:underline break-all ${details.portfolio.className || ""}`}
                  >
                    <p>Portfolio</p>
                  </a>
                ) : (
                  <p>Portfolio</p>
                )}

                {resumeData.github ? (
                  <a
                    {...details.github}
                    href={isEditMode ? undefined : resumeData.github}
                    target={isEditMode ? undefined : "_blank"}
                    rel="noreferrer"
                    className={`hover:underline break-all ${details.github.className || ""}`}
                  >
                    <p>GitHub</p>
                  </a>
                ) : (
                  <p>GitHub</p>
                )}

                {resumeData.linkedin ? (
                  <a
                    {...details.linkedin}
                    href={isEditMode ? undefined : resumeData.linkedin}
                    target={isEditMode ? undefined : "_blank"}
                    rel="noreferrer"
                    className={`hover:underline break-all ${details.linkedin.className || ""}`}
                  >
                    <p>LinkedIn</p>
                  </a>
                ) : (
                  <p>LinkedIn</p>
                )}
              </div>
            </div>
            <div className="mt-5">
              <h2 className="text-xs font-semibold mb-3 uppercase tracking-widest text-[#1a2744]">
                Education
              </h2>

              {resumeData.education?.map((education, index) => (
                <div key={index} className="mb-5">
                  <h3
                    {...details.degree}
                    className={`text-sm font-semibold text-[#1a2744] ${details.degree.className || ""}`}
                  >
                    {education.degree || "M.F.A. in Interaction Design"}
                  </h3>

                  <p
                    {...details.institution}
                    className={`text-xs text-[#4a5568] ${details.institution.className || ""}`}
                  >
                    {education.institution || "California College of the Arts"}
                  </p>

                  <p
                    {...details.graduationYear}
                    className={`text-xs text-[#718096] mt-1 ${details.graduationYear.className || ""}`}
                  >
                    {education.graduationYear || "2017"}

                    {education.gpa && (
                      <span
                        {...details.gpa}
                        className={details.gpa.className || ""}
                      >
                        {" "}
                        · CGPA {education.gpa}
                      </span>
                    )}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-5">
              <div className="mt-5">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-[#1a2744]">
                  Skills
                </h2>

                <div className="flex flex-wrap gap-2 mt-3">
                  {displaySkills.map((skill, index) => (
                    <ClassicSkillTag key={index} skill={skill} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[65%] px-6 py-5">
          <div className="w-full ">
            <h1 className="text-xs font-semibold uppercase text-[#1a2744] tracking-widest">
              summary
            </h1>
            <p
              {...details.professionalSummary}
              className={`text-[13px] text-[#4a5568] tracking-wider leading-5 mt-2 ${details.professionalSummary.className || ""}`}
            >
              {resumeData?.professionalSummary ||
                "Product designer with 7+ years crafting digital experiences for Fortune 500 companies. Passionate about human-centered design, scalable systems, and cross-functional collaboration."}
            </p>
          </div>

          <div className="w-full mt-5">
            <h1 className="text-xs font-semibold uppercase text-[#1a2744] tracking-widest">
              experience
            </h1>

            {resumeData?.experience?.map((exp, index) => (
              <div key={index}>
                <div className="mt-5 pl-4 border-l-[3px] border-black">
                  <h1 className="flex items-start justify-between gap-4">
                    <span
                      {...details.jobTitle}
                      className={`text-[#1a2744] font-semibold ${details.jobTitle.className || ""}`}
                    >
                      {exp.jobTitle || "Senior Product Designer"}
                    </span>
                    <span className="text-[#9ca3af] text-xs">
                      <span
                        {...details.startYear}
                        className={details.startYear.className || ""}
                      >
                        {exp.startYear || "2021"}
                      </span>{" "}
                      -
                      <span
                        {...details.endYear}
                        className={details.endYear.className || ""}
                      >
                        {" "}
                        {exp.endYear || "Present"}
                      </span>
                    </span>
                  </h1>
                  <p
                    {...details.company}
                    className={`mt-1 text-[#4a5568] text-sm ${details.company.className || ""}`}
                  >
                    {exp.company || "Stripe"}
                  </p>
                  <h1
                    {...details.description}
                    className={`text-[#9ca3af] leading-5 mt-1 max-w-[90%] text-[14px] ${details.description.className || ""}`}
                  >
                    {exp.description ||
                      "Led redesign of the merchant dashboard serving 2M+ businesses. Built and maintained a design system with 200+ components."}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classic;
