// import React from "react";
import { RxPerson } from "react-icons/rx";
import { RiGraduationCapLine } from "react-icons/ri";
import { FiZap } from "react-icons/fi";
import { LuBriefcaseBusiness } from "react-icons/lu";

const BuilderTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="px-3 sm:px-6 lg:px-10 pt-2 h-12 flex gap-1.5 sm:gap-4 items-center text-[13px] sm:text-[14px] font-medium text-[#7a7780] overflow-x-auto whitespace-nowrap [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden border-b border-[#e9e7e4]">
      <button
        type="button"
        onClick={() => setActiveTab("personal")}
        className={`flex-shrink-0 min-w-fit border-b-2 flex items-center justify-center gap-1.5 cursor-pointer transition-all duration-300 pb-2 px-2.5 ${
          activeTab === "personal"
            ? "border-[#1a1a2e] text-[#1a1a2e] font-semibold"
            : "border-transparent text-[#7a7780] hover:text-[#1a1a2e]"
        }`}
      >
        <RxPerson size={14} /> Personal
      </button>
      <button
        type="button"
        onClick={() => setActiveTab("education")}
        className={`flex-shrink-0 min-w-fit border-b-2 flex items-center justify-center gap-1.5 cursor-pointer transition-all duration-300 pb-2 px-2.5 ${
          activeTab === "education"
            ? "border-[#1a1a2e] text-[#1a1a2e] font-semibold"
            : "border-transparent text-[#7a7780] hover:text-[#1a1a2e]"
        }`}
      >
        <RiGraduationCapLine size={14} /> Education
      </button>
      <button
        type="button"
        onClick={() => setActiveTab("experience")}
        className={`flex-shrink-0 min-w-fit border-b-2 flex items-center justify-center gap-1.5 cursor-pointer transition-all duration-300 pb-2 px-2.5 ${
          activeTab === "experience"
            ? "border-[#1a1a2e] text-[#1a1a2e] font-semibold"
            : "border-transparent text-[#7a7780] hover:text-[#1a1a2e]"
        }`}
      >
        <LuBriefcaseBusiness size={14} /> Experience
      </button>
      <button
        type="button"
        onClick={() => setActiveTab("skills")}
        className={`flex-shrink-0 min-w-fit border-b-2 flex items-center justify-center gap-1.5 cursor-pointer transition-all duration-300 pb-2 px-2.5 ${
          activeTab === "skills"
            ? "border-[#1a1a2e] text-[#1a1a2e] font-semibold"
            : "border-transparent text-[#7a7780] hover:text-[#1a1a2e]"
        }`}
      >
        <FiZap size={14} /> Skills
      </button>
    </div>
  );
};

export default BuilderTabs;
