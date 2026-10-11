import { FaCheck } from "react-icons/fa";

const TemplateCard = ({ template, isSelected, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group w-full max-w-[280px] min-[500px]:max-w-none mx-auto text-left transition-all duration-300 cursor-pointer ${
        isSelected
          ? "border-2 border-[#1a2744] bg-[#f0f4fa] shadow-md rounded-2xl p-2.5 sm:p-3"
          : "border border-[#e3e5e8] bg-white hover:border-[#1a2744]/50 hover:bg-[#fcfbf9] hover:shadow-sm rounded-2xl p-2.5 sm:p-3"
      }`}
    >
      <div
        className="relative overflow-hidden rounded-xl border border-[#e5e7eb] bg-white aspect-[4/5] w-full max-h-[220px] min-[500px]:max-h-[250px] lg:max-h-none flex items-center justify-center shadow-xs"
      >
        <img
          src={template.preview}
          alt={template.name}
          className="w-full h-full object-cover object-top"
        />

        {isSelected && (
          <div
            style={{ backgroundColor: template.accentColor || "#1a2744" }}
            className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full text-white flex items-center justify-center shadow-md"
          >
            <FaCheck size={10} className="sm:hidden" />
            <FaCheck size={11} className="hidden sm:block" />
          </div>
        )}
      </div>

      <div className="mt-2.5 sm:mt-3 flex flex-col gap-1 w-full min-w-0">
        <div className="flex items-center justify-between gap-1.5 w-full min-w-0">
          <span className="text-xs sm:text-sm font-semibold text-[#1a1a2e] truncate min-w-0 flex-1">
            {template.name}
          </span>
          {isSelected ? (
            <span className="text-[10px] uppercase tracking-wider font-bold text-white bg-[#1a2744] px-2 py-0.5 rounded-full flex-shrink-0">
              Selected
            </span>
          ) : (
            <span className="text-[11px] text-[#7a7568] group-hover:text-[#1a2744] flex-shrink-0">
              Select →
            </span>
          )}
        </div>
      </div>
    </button>
  );
};

export default TemplateCard;