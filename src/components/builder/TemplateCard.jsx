// import React from "react";
import { FaCheck } from "react-icons/fa";

const TemplateCard = ({
  template,
  isSelected,
  onClick,
}) => {


  return (
    <button
      type="button"
      onClick={onClick}
      className={`group w-full text-left transition-all duration-300 ${isSelected ? "-translate-y-1" : "hover:-translate-y-1"
        }`}
    >
      <div
        style={{ borderColor: isSelected ? template.accentColor : "" }}
        className={`relative overflow-hidden rounded-xl border-2 transition-all border-[#e5e7eb] duration-300`}
      >
        <img
          src={template.preview}
          alt={template.name}
          width={140}
          height={200}
          className="w-full h-full object-cover"
        />

        {isSelected && (
          <div style={{ backgroundColor: template.accentColor }} className="absolute top-2 right-2 w-6 h-6 rounded-full text-white flex items-center justify-center">
            <FaCheck size={12} />
          </div>
        )}
      </div>

      <p className="mt-2 text-sm font-medium text-[#374151] text-center">
        {template.name}
      </p>
    </button>
  );
};

export default TemplateCard;