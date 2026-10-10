// import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineColorLens } from "react-icons/md";
import { LuDownload } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { useResumeEditor } from "../../hooks/useResumeEditor";
import { FiEdit3 } from "react-icons/fi";
import { FiCheck } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { toast } from "react-toastify";

const BuilderNavbar = ({
  template,
  onSwitchTemplate,
  onDownload,
  onNewResume,
}) => {
  const {
    isEditMode,
    setIsEditMode,
    savedStyle,
    setSavedStyle,
    editingStyle,
    setEditingStyle,
    setSelectedField,
  } = useResumeEditor();
  const navigate = useNavigate();

  const handleEditClick = () => {
    setEditingStyle(structuredClone(savedStyle));
    setIsEditMode(true);
  };

  const handleDoneClick = () => {
    setSavedStyle(structuredClone(editingStyle));
    localStorage.setItem("resumeStyle", JSON.stringify(editingStyle));
    setSelectedField(null);
    setIsEditMode(false);
    toast.success("Template changes saved successfully!"); 
  };

  const handleDiscardClick = () => {
    setEditingStyle(structuredClone(savedStyle));
    setSelectedField(null);
    setIsEditMode(false);
    toast.info("Unsaved changes discarded.")
  };

  return (
    <div className="w-full h-17 flex justify-between items-center px-10">
      <div className="left flex items-center gap-4">
        <button
          onClick={() => navigate("/")}
          className="group flex items-center gap-1 text-[#7A7568] font-semibold hover:text-[#1a2744] transition-all duration-200"
        >
          <IoIosArrowBack className="group-hover:-translate-x-1 transition-transform duration-200" />
          Back
        </button>
        <div className="w-[1px] h-5 bg-[#e3e5e8]"></div>
        <h1 className="flex items-center gap-2 text-[#1a1a35] text-md font-semibold">
          <span
            style={{ backgroundColor: template.accentColor }}
            className="w-3 h-3 rounded-sm"
          ></span>
          {template.name} Template
        </h1>
      </div>
      <div className="right flex gap-3">
        {!isEditMode ? (
          <>
            <button
              onClick={onSwitchTemplate}
              className="flex items-center justify-center gap-2 text-[#1a1a2e] font-medium px-3 py-1.5 border rounded-lg border-[#e3e5e8] hover:border-[#d4d2cb] hover:bg-[#eee9de] transition-all duration-300 cursor-pointer active:scale-95"
            >
              <MdOutlineColorLens /> Switch Template
            </button>
            <button
              onClick={handleEditClick}
              className="flex items-center justify-center gap-2 text-[#1a1a2e] font-medium px-3 py-1.5 border rounded-lg border-[#e3e5e8] hover:border-[#d4d2cb] hover:bg-[#eee9de] transition-all duration-300 cursor-pointer active:scale-95"
            >
              <FiEdit3 /> Edit Template
            </button>
            <button
              onClick={onNewResume}
              className="flex items-center justify-center gap-2 text-[#1a1a2e] font-medium px-3 py-1.5 border rounded-lg border-[#e3e5e8] hover:border-[#d4d2cb] hover:bg-[#eee9de] transition-all duration-300 cursor-pointer active:scale-95"
            >
              <FiPlus /> New Resume
            </button>
            <button
              onClick={onDownload}
              className="flex items-center justify-center gap-2 text-white font-semibold bg-[#1a2744] px-3 py-1.5 rounded-lg hover:bg-[#303c56] transition-all duration-300 cursor-pointer active:scale-95"
            >
              <LuDownload /> Download PDF
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleDiscardClick}
              className="flex items-center justify-center gap-2 text-[#1a1a2e] font-medium px-3 py-1.5 border rounded-lg border-[#e3e5e8] hover:border-[#d4d2cb] hover:bg-[#eee9de] transition-all duration-300 cursor-pointer active:scale-95"
            >
              <FiX /> Discard
            </button>
            <button
              onClick={handleDoneClick}
              className="flex items-center justify-center gap-2 text-[#1a1a2e] font-medium px-3 py-1.5 border rounded-lg border-[#e3e5e8] hover:border-[#d4d2cb] hover:bg-[#eee9de] transition-all duration-300 cursor-pointer active:scale-95"
            >
              <FiCheck /> Done
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default BuilderNavbar;
