import useEditableField from "../../hooks/useEditableField";
import { useResumeEditor } from "../../hooks/useResumeEditor";
import useResumeFields from "../../hooks/useResumeFields";
import { getSkillsArray, defaultSkills } from "../common/SkillHelpers";

const ModernSkillTag = ({ skill, index }) => {
  const editable = useEditableField({
    section: "skills",
    index,
    field: "skill",
  });
  return (
    <p
      {...editable}
      className={editable.className || ""}
    >
      · {skill}
    </p>
  );
};

const Modern = ({ resumeData }) => {
  const skillsArray = getSkillsArray(resumeData.skills);
  const displaySkills = skillsArray.length > 0 ? skillsArray : defaultSkills;

  const details = useResumeFields();
  const { isEditMode } = useResumeEditor();

  return (
    <div className="w-full min-h-screen overflow-hidden shadow-lg bg-white">
      <div {...details.header} className={`h-[6px] w-full bg-[#0D3B66] ${details.header.className || ""}`}></div>

      <div className="px-6 py-10">
        <div className="flex flex-col justify-center gap-1">
          <h1
            {...details.fullName}
            className={`text-4xl capitalize text-[#1C3B66] font-bold ${details.fullName.className || ""}`}
          >
            {resumeData.fullName || "Alexandra Chen"}
          </h1>

          <h2
            {...details.professionalTitle}
            className={`text-md mt-2 text-[#7E8A9D] ${details.professionalTitle.className || ""}`}
          >
            {resumeData.professionalTitle || "Senior Product Designer"}
          </h2>

          <div className="flex flex-wrap gap-5 mt-2 text-xs text-[#4A5568]">
            <h3 {...details.email} className={details.email.className || ""}>
              {resumeData.email || "alex.chen@email.com"}
            </h3>

            <h3 {...details.phone} className={details.phone.className || ""}>
              {resumeData.phone || "+1 (555) 234-5678"}
            </h3>

            <h3
              {...details.location}
              className={details.location.className || ""}
            >
              {resumeData.location || "San Francisco, CA"}
            </h3>
          </div>
        </div>

        <hr className="my-5 text-[#E5E7EB]" />
        <div>
          <div>
            <h1 className="uppercase tracking-widest text-[#0D3B66] font-semibold text-xs">
              Profile
            </h1>

            <p
              {...details.professionalSummary}
              className={`text-sm mt-2 text-[#4A5568] leading-6 ${details.professionalSummary.className || ""}`}
            >
              {resumeData.professionalSummary ||
                "Product designer with 7+ years crafting digital experiences for Fortune 500 companies. Passionate about human-centered design, scalable systems, and cross-functional collaboration."}
            </p>
          </div>

          <div className="mt-8">
            <h1 className="uppercase tracking-widest text-[#0D3B66] font-semibold text-xs">
              Experience
            </h1>

            {resumeData?.experience?.map((exp, index) => (
              <div key={index} className="mt-3">
                <div className="flex items-center justify-between">
                  <h1
                    {...details.jobTitle}
                    className={`text-md font-semibold text-[#1A202C] ${details.jobTitle.className || ""}`}
                  >
                    {exp.jobTitle || "Senior Product Designer"}
                  </h1>

                  <h2 className="text-xs text-[#9CA3AF]">
                    <span
                      {...details.startYear}
                      className={details.startYear.className || ""}
                    >
                      {exp.startYear || "2021"}
                    </span>{" "}
                    -{" "}
                    <span
                      {...details.endYear}
                      className={details.endYear.className || ""}
                    >
                      {" "}
                      {exp.endYear || "Present"}
                    </span>
                  </h2>
                </div>

                <h1
                  {...details.company}
                  className={`text-[#0D3B66] font-semibold mt-1 text-sm ${details.company.className || ""}`}
                >
                  {exp.company || "Stripe"}
                </h1>

                <p
                  {...details.description}
                  className={`text-[#718096] text-[14px] mt-1 leading-5 max-w-[90%] ${details.description.className || ""}`}
                >
                  {exp.description ||
                    "Led redesign of the merchant dashboard serving 2M+ businesses. Built and maintained a design system with 200+ components."}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-12 mt-8">
            <div className="w-2/4">
              <h1 className="uppercase mb-3 tracking-widest text-[#0D3B66] font-semibold text-xs">
                Education
              </h1>

              {resumeData?.education?.map((education, index) => (
                <div key={index} className="mb-5">
                  <h1
                    {...details.degree}
                    className={`text-sm text-[#1a202c] font-semibold ${details.degree.className || ""}`}
                  >
                    {education.degree || "M.F.A. in Interaction Design"}
                  </h1>

                  <p
                    {...details.institution}
                    className={`text-[#718096] text-xs ${details.institution.className || ""}`}
                  >
                    {education.institution || "California College of the Arts"}
                  </p>

                  <p className="text-[#718096] text-xs">
                    <span
                      {...details.graduationYear}
                      className={details.graduationYear.className || ""}
                    >
                      {education.graduationYear || "2017"}
                    </span>

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

            <div>
              <h1 className="uppercase tracking-widest text-[#0D3B66] font-semibold text-xs">
                Skills
              </h1>

              <div className="mt-3 flex flex-col gap-2 text-xs text-[#4a5568]">
                {displaySkills.map((skill, index) => (
                  <ModernSkillTag key={index} skill={skill} index={index} />
                ))}
              </div>
              <div className="mt-8 max-w-[90%]">
                <h1 className="uppercase  tracking-widest text-[#0D3B66] font-semibold text-xs">
                  Links
                </h1>

                <div className="mt-3 flex flex-col gap-2 text-xs text-[#4a5568]">
                  {resumeData.portfolio ? (
                    <a
                      href={isEditMode ? undefined : resumeData.portfolio}
                      target={isEditMode ? undefined : "_blank"}
                      rel="noreferrer"
                      className={`hover:underline break-all ${details.portfolio.className || ""}`}
                      {...details.portfolio}
                    >
                      <p>Portfolio</p>
                    </a>
                  ) : (
                    <p>Portfolio</p>
                  )}

                  {resumeData.github ? (
                    <a
                      href={isEditMode ? undefined : resumeData.github}
                      target={isEditMode ? undefined : "_blank"}
                      rel="noreferrer"
                      className={`hover:underline break-all ${details.github.className || ""}`}
                      {...details.github}
                    >
                      <p>GitHub</p>
                    </a>
                  ) : (
                    <p>GitHub</p>
                  )}

                  {resumeData.linkedin ? (
                    <a
                      href={isEditMode ? undefined : resumeData.linkedin}
                      target={isEditMode ? undefined : "_blank"}
                      rel="noreferrer"
                      className={`hover:underline break-all ${details.linkedin.className || ""}`}
                      {...details.linkedin}
                    >
                      <p>LinkedIn</p>
                    </a>
                  ) : (
                    <p>LinkedIn</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modern;
 