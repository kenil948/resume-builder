// import React from "react";
import { getSkillsArray } from "../common/SkillHelpers";

const Skills = ({ form }) => {
  const {
    register,
    formState: { errors },
    watch,
  } = form;

  const skills = watch("skills") || "";
  const skillsArray = getSkillsArray(skills);

  return (
    <div className="w-full h-full overflow-y-auto">
      <form className="flex flex-col px-6 pt-6 pb-2" noValidate>
        <div>
          <label className="block mb-2 uppercase text-sm tracking-wider text-[#5a5965] font-semibold">
            Skills (comma-separated)
          </label>
          <textarea
            rows={5}
            placeholder="React, JavaScript, Tailwind CSS, Node.js, MongoDB"
            {...register("skills")}
            className="resize-none w-full min-h-36 px-4 py-3 rounded-lg bg-[#efece5] text-zinc-700 placeholder:text-[#9c988d] outline-none border border-transparent focus:bg-white focus:border-[#babec6]"
          ></textarea>
        </div>
        <div className="min-h-5 pt-1">
          <p className="text-xs text-[#d64545]">{errors?.skills?.message}</p>
        </div>
      </form>
      <div className="px-6">
        <p className="text-xs text-[#7a7568] mt-1">
          Separate each skill with a comma. Example: React, JavaScript, Tailwind
          CSS
        </p>
        {skillsArray.length > 0 && (
          <>
            <h1 className="mt-5 mb-2 uppercase text-sm tracking-wider text-[#5a5965] font-semibold">
              Preview
            </h1>
            <div className="flex flex-wrap gap-2 mt-2 ">
              {skillsArray.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full bg-[#e0dfde] text-[#1a2744] text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Skills;
