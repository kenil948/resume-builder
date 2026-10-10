import { GoDot } from "react-icons/go";
import { getSkillsArray, defaultSkills } from "../common/SkillHelpers";
import useResumeFields from "../../hooks/useResumeFields";
import { useResumeEditor } from "../../hooks/useResumeEditor";
import useEditableField from "../../hooks/useEditableField";

const ExecutiveSkillTag = ({ skill, index }) => {
  const editable = useEditableField({
    section: "skills",
    index,
    field: "skill",
  });
  return (
    <p
      {...editable}
      className={`capitalize text-xs font-normal text-[#4a5568] flex items-center gap-2 mb-1 ${editable.className || ""}`}
    >
      <GoDot
        className="rounded-full text-[#C4A962] bg-[#C4A962]"
        size={"6px"}
      />
      {skill}
    </p>
  );
};

const Executive = ({ resumeData }) => {
  const skillsArray = getSkillsArray(resumeData.skills);
  const displaySkills = skillsArray.length > 0 ? skillsArray : defaultSkills;

  const details = useResumeFields();
  const { isEditMode } = useResumeEditor();

  return (
    <div className="w-full min-h-screen bg-white shadow-lg overflow-hidden">
      <div
        {...details.header}
        className={`w-full bg-[#7C2D12] px-10 py-5 text-[#FFFFFF] ${details.header.className || ""}`}
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
      <div
        {...details.sidebar}
        className={`w-full px-10 text-xs py-3 bg-[#FDF2E9] text-[#78350f] border-y border-y-[#78360f23] ${details.sidebar.className || ""}`}
      >
        <div onClick={(e) => e.stopPropagation()} className="flex gap-5"> 
          <p {...details.email} className={details.email.className || ""}>
            {resumeData.email || "alex.chen@email.com"}
          </p>
          <p {...details.phone} className={details.phone.className || ""}>
            {resumeData.phone || "+1 (555) 234-5678"}
          </p>
          <p {...details.location} className={details.location.className || ""}>
            {resumeData.location || "San Francisco, CA"}
          </p>
        </div>
      </div>

      <div className="flex">
        <div className="w-[35%] pl-8 pr-4 py-5">
          <div className="w-full">
            <p className="text-xs font-semibold uppercase mb-3 text-[#7c2d12] tracking-widest">
              education
            </p>

            {resumeData?.education?.map((education, index) => (
              <div key={index} className="flex flex-col gap-1 mb-5">
                <h1
                  {...details.degree}
                  className={`text-sm font-semibold text-[#1a202c] ${details.degree.className || ""}`}
                >
                  {education.degree || "M.F.A. in Interaction Design"}
                </h1>
                <h1
                  {...details.institution}
                  className={`text-xs text-[#718096] ${details.institution.className || ""}`}
                >
                  {education.institution || "California College of the Arts"}
                </h1>
                <p className="text-xs text-[#9ca3af]">
                  <span
                    {...details.graduationYear}
                    className={`mr-1 ${details.graduationYear.className || ""}`}
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
          <div className="mt-5 max-w-[95%]">
            <h1 className="text-[#7c2d12] uppercase tracking-widest text-xs font-semibold">
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

          <div className="mt-5">
            <h1 className="text-[#7c2d12] uppercase tracking-widest text-xs font-semibold">
              Expertise
            </h1>
            <div className="mt-3 gap-2">
              {displaySkills.map((skill, index) => (
                <ExecutiveSkillTag key={index} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>

        <div className="w-[65%] px-6 py-5">
          <div className="w-full">
            <h1 className="text-xs font-semibold uppercase text-[#7C2D12] tracking-widest">
              Executive Profile
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
            <h1 className="text-xs font-semibold uppercase text-[#7C2D12] tracking-widest">
              Career History
            </h1>

            {resumeData.experience.map((exp, index) => (
              <div key={index}>
                <div className="mt-5 pl-4 border-l-[3px] border-[#c4a962]">
                  <div className="flex items-start justify-between gap-4">
                    <h2
                      {...details.jobTitle}
                      className={`text-[#1a202c] font-semibold ${details.jobTitle.className || ""}`}
                    >
                      {exp.jobTitle || "Senior Product Designer"}
                    </h2>
                    <h2 className="text-[#9ca3af] text-xs">
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
                    {...details.company}
                    className={`mt-1 text-[#7c2d12] text-sm ${details.company.className || ""}`}
                  >
                    {exp.company || "Stripe"}
                  </p>
                  <p
                    {...details.description}
                    className={`text-[#9ca3af] leading-5 mt-1 max-w-[90%] text-[14px] ${details.description.className || ""}`}
                  >
                    {exp.description ||
                      "Led redesign of the merchant dashboard serving 2M+ businesses. Built and maintained a design system with 200+ components."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Executive;
