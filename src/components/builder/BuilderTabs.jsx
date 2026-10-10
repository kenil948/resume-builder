// import React from "react";
import { RxPerson } from "react-icons/rx";
import { RiGraduationCapLine } from "react-icons/ri";
import { FiZap } from "react-icons/fi";
import { LuBriefcaseBusiness } from "react-icons/lu";

const BuilderTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="px-10 pt-3 h-12 flex gap-5 items-center text-[14px] font-medium text-[#7a7780] ">
      <h1
        onClick={() => setActiveTab("personal")}
        className={`flex-1 border-b-2 flex items-center justify-center gap-1.5 cursor-pointer transition-all duration-300 pb-2 ${
          activeTab === "personal"
            ? "border-[#1a1a2e] text-[#1a1a2e]"
            : "border-transparent text-[#7a7780] hover:text-[#1a1a2e]"
        }`}
      >
        <RxPerson size={13} /> Personal
      </h1>
      <h1
      onClick={() => setActiveTab("education")}
        className={`flex-1 border-b-2 flex items-center justify-center gap-1.5 cursor-pointer transition-all duration-300 pb-2 ${
          activeTab === "education"
            ? "border-[#1a1a2e] text-[#1a1a2e]"
            : "border-transparent text-[#7a7780] hover:text-[#1a1a2e]"
        }`}
      >
        <RiGraduationCapLine size={13} /> Education
      </h1>
      <h1
      onClick={() => setActiveTab("experience")}
        className={`flex-1 border-b-2 flex items-center justify-center gap-1.5 cursor-pointer transition-all duration-300 pb-2 ${
          activeTab === "experience"
            ? "border-[#1a1a2e] text-[#1a1a2e]"
            : "border-transparent text-[#7a7780] hover:text-[#1a1a2e]"
        }`}
      >
        <LuBriefcaseBusiness size={13} /> Experience
      </h1>
      <h1
      onClick={() => setActiveTab("skills")}
        className={`px-3 flex border-b-2 items-center justify-center gap-1.5 cursor-pointer transition-all duration-300 pb-2 ${
          activeTab === "skills"
            ? "border-[#1a1a2e] text-[#1a1a2e]"
            : "border-transparent text-[#7a7780] hover:text-[#1a1a2e]"
        }`}
      >
        <FiZap size={13} /> Skills
      </h1>
    </div>
  );
};

export default BuilderTabs;
