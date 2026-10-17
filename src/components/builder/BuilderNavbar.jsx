import { useState, useRef, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineColorLens } from "react-icons/md";
import { LuDownload } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { FiPlus, FiEdit3, FiCheck, FiX, FiMoreVertical } from "react-icons/fi";
import { useResumeEditor } from "../../hooks/useResumeEditor";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleEditClick = () => {
    setEditingStyle(structuredClone(savedStyle));
    setIsEditMode(true);
    setIsMenuOpen(false);
  };

  const handleDoneClick = () => {
    setSavedStyle(structuredClone(editingStyle));
    const hasResumeData = Boolean(localStorage.getItem("resumeData"));
    const raw = JSON.parse(localStorage.getItem("resumeStyle") || "{}");
    const isScoped = Object.keys(raw).some((k) =>
      ["classic", "modern", "creative", "minimal", "executive"].includes(k),
    );
    const allStyles = hasResumeData && isScoped ? raw : {};
    allStyles[template.slug] = editingStyle;
    localStorage.setItem("resumeStyle", JSON.stringify(allStyles));
    if (!hasResumeData) {
      localStorage.setItem("resumeData", JSON.stringify({}));
    }
    setSelectedField(null);
    setIsEditMode(false);
    toast.success("Template changes saved successfully!");
  };

  const handleDiscardClick = () => {
    setEditingStyle(structuredClone(savedStyle));
    setSelectedField(null);
    setIsEditMode(false);
    toast.info("Unsaved changes discarded.");
  };

  return (
    <div className="w-full min-h-14 sm:min-h-16 py-2 px-3 sm:px-6 lg:px-10 flex items-center justify-between gap-2 bg-white relative z-30">
      <div className="left flex items-center gap-2 sm:gap-4 flex-shrink-0">
        <button
          onClick={() => navigate("/")}
          className="group flex items-center gap-1 text-[#7A7568] font-semibold text-xs sm:text-sm hover:text-[#1a2744] transition-all duration-200"
        >
          <IoIosArrowBack className="group-hover:-translate-x-1 transition-transform duration-200" />
          Back
        </button>
        <div className="w-[1px] h-4 sm:h-5 bg-[#e3e5e8]"></div>
        <h1 className="flex items-center gap-1.5 sm:gap-2 text-[#1a1a35] text-xs sm:text-md font-semibold truncate max-w-[120px] xs:max-w-[160px] sm:max-w-none">
          <span
            style={{ backgroundColor: template.accentColor }}
            className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm flex-shrink-0"
          ></span>
          <span className="truncate">{template.name} Template</span>
        </h1>
      </div>

      <div className="right flex items-center gap-1.5 sm:gap-3" ref={menuRef}>
        {!isEditMode ? (
          <>
            {/* Desktop Action Buttons (sm and larger) */}
            <div className="hidden sm:flex items-center gap-2 lg:gap-3">
              <button
                onClick={onSwitchTemplate}
                className="flex items-center justify-center gap-1.5 text-[#1a1a2e] font-medium text-xs sm:text-sm px-3 py-1.5 border rounded-lg border-[#e3e5e8] hover:border-[#d4d2cb] hover:bg-[#eee9de] transition-all duration-300 cursor-pointer active:scale-95"
              >
                <MdOutlineColorLens /> Switch Template
              </button>
              <button
                onClick={handleEditClick}
                className="flex items-center justify-center gap-1.5 text-[#1a1a2e] font-medium text-xs sm:text-sm px-3 py-1.5 border rounded-lg border-[#e3e5e8] hover:border-[#d4d2cb] hover:bg-[#eee9de] transition-all duration-300 cursor-pointer active:scale-95"
              >
                <FiEdit3 /> Edit Template
              </button>
              <button
                onClick={onNewResume}
                className="flex items-center justify-center gap-1.5 text-[#1a1a2e] font-medium text-xs sm:text-sm px-3 py-1.5 border rounded-lg border-[#e3e5e8] hover:border-[#d4d2cb] hover:bg-[#eee9de] transition-all duration-300 cursor-pointer active:scale-95"
              >
                <FiPlus /> New Resume
              </button>
            </div>

            {/* Always visible Download PDF button */}
            <button
              onClick={onDownload}
              className="flex items-center justify-center gap-1.5 text-white font-semibold text-xs sm:text-sm bg-[#1a2744] px-2.5 sm:px-3.5 py-1.5 rounded-lg hover:bg-[#303c56] transition-all duration-300 cursor-pointer active:scale-95 shadow-sm"
            >
              <LuDownload /> Download <span className="hidden xs:inline">PDF</span>
            </button>

            {/* Compact Mobile Overflow Menu Button (< sm) */}
            <div className="relative sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="More actions"
                className="p-1.5 border border-[#e3e5e8] rounded-lg text-[#1a1a2e] hover:bg-[#eee9de] transition-colors"
              >
                <FiMoreVertical size={18} />
              </button>

              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-[#e3e5e8] rounded-xl shadow-xl py-1 z-50 flex flex-col">
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      onSwitchTemplate();
                    }}
                    className="flex items-center gap-2.5 px-4 py-2.5 text-xs text-[#1a1a2e] font-medium hover:bg-[#f5f3ef] text-left"
                  >
                    <MdOutlineColorLens size={16} /> Switch Template
                  </button>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleEditClick();
                    }}
                    className="flex items-center gap-2.5 px-4 py-2.5 text-xs text-[#1a1a2e] font-medium hover:bg-[#f5f3ef] text-left"
                  >
                    <FiEdit3 size={15} /> Edit Template
                  </button>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      onNewResume();
                    }}
                    className="flex items-center gap-2.5 px-4 py-2.5 text-xs text-[#1a1a2e] font-medium hover:bg-[#f5f3ef] text-left"
                  >
                    <FiPlus size={15} /> New Resume
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="flex items-center gap-2">
            <button
              onClick={handleDiscardClick}
              className="flex items-center justify-center gap-1 sm:gap-2 text-[#1a1a2e] font-medium text-xs sm:text-sm px-2.5 sm:px-3 py-1.5 border rounded-lg border-[#e3e5e8] hover:border-[#d4d2cb] hover:bg-[#eee9de] transition-all duration-300 cursor-pointer active:scale-95"
            >
              <FiX /> Discard
            </button>
            <button
              onClick={handleDoneClick}
              className="flex items-center justify-center gap-1 sm:gap-2 text-white font-semibold text-xs sm:text-sm bg-[#1a2744] px-3 sm:px-3.5 py-1.5 rounded-lg hover:bg-[#303c56] transition-all duration-300 cursor-pointer active:scale-95 shadow-sm"
            >
              <FiCheck /> Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BuilderNavbar;
