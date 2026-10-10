import useEditableField from "../../hooks/useEditableField";
import { getSkillsArray, defaultSkills } from "../common/SkillHelpers";
import useResumeFields from "../../hooks/useResumeFields";
import { useResumeEditor } from "../../hooks/useResumeEditor";

const CreativeSkillTag = ({ skill, index }) => {
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
      {skill}
    </p>
  );
};

const Creative = ({ resumeData }) => {
  const skillsArray = getSkillsArray(resumeData.skills);
  const displaySkills = skillsArray.length > 0 ? skillsArray : defaultSkills;

  const details = useResumeFields();
  const { isEditMode } = useResumeEditor();
  const initial = useEditableField({
    section: "personal",
    field: "initial",
  });

  return (
    <div className="w-full min-h-screen bg-white shadow-lg">
      <div className="flex min-h-screen">
        <div
          {...details.sidebar}
          className={`w-[35%] bg-[#6b21a8] text-white px-4 py-10 ${details.sidebar.className || ""}`}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <div className="w-full">
              <div
                {...initial}
                className={`w-15 h-15 text-2xl text-[#ffffffcc] font-semibold flex items-center justify-center rounded-full bg-[#8649B8] ${initial.className || ""}`}
              >
                {resumeData?.fullName?.[0]?.toUpperCase() || "A"}
              </div>
              <h1
                {...details.fullName}
                className={`text-3xl mt-3 capitalize font-bold ${details.fullName.className || ""}`}
              >
                {resumeData.fullName || "Alexandara chen"}
              </h1>
              <p
                {...details.professionalTitle}
                className={`uppercase tracking-wider mt-2 text-xs text-[#ffffffa6] ${details.professionalTitle.className || ""}`}
              >
                {resumeData.professionalTitle || "senior product designer"}
              </p>
            </div>
            <hr className="text-[#ffffff33] my-5" />
            <div className="w-full">
              <p className="text-xs font-semibold text-[#ffffff8c] uppercase tracking-widest">
                Contact
              </p>
              <div className="flex flex-col text-xs  text-[#ffffffd1] gap-1 mt-2">
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
            <hr className="text-[#ffffff33] my-5" />
            <div className="max-w-[90%]">
              <h1 className="uppercase tracking-widest text-[#ffffff8c] font-semibold text-xs">
                Links
              </h1>

              <div className="mt-2 flex flex-col gap-2 text-xs text-[#ffffffd9]">
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

            <hr className="text-[#ffffff33] my-5" />

            <div>
              <h1 className="uppercase tracking-widest text-[#ffffff8c] font-semibold text-xs">
                Skills
              </h1>
              <div className="mt-2 flex flex-col gap-2 text-xs text-[#ffffffd9]">
                {displaySkills?.map((skill, index) => (
                  <CreativeSkillTag key={index} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-[65%] px-4 py-4">
          <div className="w-full mt-5">
            <h1 className="text-xs text-[#6b21a8] font-medium uppercase tracking-widest">
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
            <h1 className="text-xs text-[#6b21a8] font-medium uppercase tracking-widest">
              experience
            </h1>

            {resumeData?.experience?.map((exp, index) => (
              <div key={index} className="mt-3 rounded">
                <h1
                  {...details.jobTitle}
                  className={`font-semibold text-sm text-[#1a202c] ${details.jobTitle.className || ""}`}
                >
                  {exp.jobTitle || "Senior Product Designer"}
                </h1>
                <p className="flex justify-between text-[#6b21a8] tracking-wide mt-1 font-semibold text-xs capitalize">
                  <span
                    {...details.company}
                    className={details.company.className || ""}
                  >
                    {exp.company || "Stripe"}
                  </span>
                  <span className="text-[#9ca3af] font-normal">
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
                </p>
                <h1
                  {...details.description}
                  className={`text-[#718096] text-[14px] mt-1 leading-5 max-w-[90%] ${details.description.className || ""}`}
                >
                  {exp.description ||
                    "Led redesign of the merchant dashboard serving 2M+ businesses. Built and maintained a design system with 200+ components."}
                </h1>
              </div>
            ))}
          </div>
          <div className="w-full mt-5">
            <p className="text-xs text-[#6b21a8] mb-3 font-semibold uppercase tracking-widest">
              education
            </p>

            {resumeData.education.map((education, index) => (
              <div key={index} className="mb-5">
                <h1
                  {...details.degree}
                  className={`text-sm text-[#1a202c] font-semibold ${details.degree.className || ""}`}
                >
                  {education.degree || "M.F.A. in Interaction Design"}
                </h1>
                <p className="text-[#718096] text-xs">
                  <span
                    {...details.institution}
                    className={details.institution.className || ""}
                  >
                    {education.institution || "California College of the Arts"},
                  </span>
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
        </div>
      </div>
    </div>
  );
};

export default Creative;
