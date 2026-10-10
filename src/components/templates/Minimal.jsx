import useEditableField from "../../hooks/useEditableField";
import { useResumeEditor } from "../../hooks/useResumeEditor";
import useResumeFields from "../../hooks/useResumeFields";
import { getSkillsArray, defaultSkills } from "../common/SkillHelpers";

const MinimalSkillTag = ({ skill, index }) => {
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
      • {skill}
    </p>
  );
};

const Minimal = ({ resumeData }) => {
  const details = useResumeFields();
  const { isEditMode } = useResumeEditor();

  const skillsArray = getSkillsArray(resumeData.skills);
  const displaySkills = skillsArray.length > 0 ? skillsArray : defaultSkills;

  return (
    <div className="w-full min-h-screen overflow-hidden shadow-lg bg-white">
      <div className="p-8">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1
            {...details.fullName}
            className={`text-4xl text-[#111111] capitalize font-bold ${details.fullName.className || ""}`}
          >
            {resumeData.fullName || "Alexandara chen"}
          </h1>
          <h2
            {...details.professionalTitle}
            className={`text-sm text-[#9ca3af] mt-2 uppercase tracking-widest ${details.professionalTitle.className || ""}`}
          >
            {resumeData.professionalTitle || "senior product designer"}
          </h2>
          <div className="flex gap-3 text-xs text-[#6b7280]">
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
        <hr className="my-7 text-[#e5e7eb]" />
        <div className="flex justify-center items-center text-center">
          <p
            {...details.professionalSummary}
            className={`text-[#6b7280] w-[70%] leading-5.5 text-sm ${details.professionalSummary.className || ""}`}
          >
            {resumeData?.professionalSummary ||
              "Product designer with 7+ years crafting digital experiences for Fortune 500 companies. Passionate about human-centered design, scalable systems, and cross-functional collaboration."}
          </p>
        </div>
        <hr className="my-7 text-[#e5e7eb]" />
        <div className="my-5">
          <h1 className="uppercase tracking-widest text-[#111111] font-semibold text-center text-xs">
            Experience
          </h1>
          {resumeData.experience.map((exp, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mt-3">
                <h1 className="text-sm font-semibold text-[#111111]">
                  <span
                    {...details.jobTitle}
                    className={details.jobTitle.className || ""}
                  >
                    {exp.jobTitle || "Senior Product Designer"}
                  </span>
                  <span
                    {...details.company}
                    className={`text-[#6b7280] font-normal ${details.company.className || ""}`}
                  >
                    {" "}
                    at {exp.company || "Stripe"}
                  </span>
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
              <p
                {...details.description}
                className={`text-[#6b7280] text-[14px] mt-1 leading-5 max-w-[90%] ${details.description.className || ""}`}
              >
                {exp.description ||
                  "Led redesign of the merchant dashboard serving 2M+ businesses. Built and maintained a design system with 200+ components."}
              </p>
            </div>
          ))}
        </div>
        <hr className="my-7 text-[#e5e7eb]" />
        <div className="flex w-full justify-between">
          <div className="w-[35%]">
            <h1 className="uppercase tracking-widest text-[#111111] font-semibold mb-3 text-xs">
              Education
            </h1>
            {resumeData.education.map((education, index) => (
              <div key={index} className="mb-5">
                <h1
                  {...details.degree}
                  className={`text-sm text-[#111111] font-semibold ${details.degree.className || ""}`}
                >
                  {education.degree || "M.F.A. in Interaction Design"}
                </h1>
                <p className="text-[#6b7280] text-xs">
                  <span
                    {...details.institution}
                    className={details.institution.className || ""}
                  >
                    {education.institution || "California College of the Arts"}
                  </span>{" "}
                  ·{" "}
                  <span
                    {...details.graduationYear}
                    className={details.graduationYear.className || ""}
                  >
                    {education.graduationYear || "2017"}
                  </span>
                </p>
                {education.gpa && (
                  <h1
                    {...details.gpa}
                    className={`text-xs text-[#718096] ${details.gpa.className || ""}`}
                  >
                    CGPA {education.gpa}
                  </h1>
                )}
              </div>
            ))}
          </div>
          <div className="w-[65%] max-w-[95%]">
            <h1 className="uppercase tracking-widest text-[#111111] font-semibold text-xs">
              Skills
            </h1>

            <div className="mt-3 flex flex-wrap gap-2 text-xs text-[#6b7280]">
              {displaySkills?.map((skill, index) => (
                <MinimalSkillTag key={index} skill={skill} index={index} />
              ))}
            </div>

            <div className="mt-7 max-w-[90%]">
              <h1 className="uppercase tracking-widest text-[#111111] font-semibold text-xs">
                Links
              </h1>

              <div className="mt-3 flex flex-col gap-2 text-xs text-[#6b7280]">
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
  );
};

export default Minimal;
