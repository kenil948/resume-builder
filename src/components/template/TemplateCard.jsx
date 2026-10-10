// import React from "react";
import { FaCheck } from "react-icons/fa6";
const TemplateCard = ({ data, selectedTemplate, setSelectedTemplate }) => {
  const isActive = selectedTemplate === data.slug;

  return (
    <div
      onClick={() => setSelectedTemplate(data.slug)}
      className={`w-60 h-full cursor-pointer transition-all duration-300 ${
        isActive ? "-translate-y-2" : "hover:-translate-y-1"
      }`}
    >
      <div
        style={{ borderColor: isActive ? data.accentColor : "transparent" }}
        className={
          "w-full h-[40vh] rounded-3xl overflow-hidden border-3 transition-all duration-300"
        }
      >
        <img className="w-full h-full" src={data.preview} alt={data.name} />
      </div>

      <div className="flex items-center justify-between gap-3 mt-3">
        <h1 className="text-[#1a1a53] text-md font-semibold">{data.name}</h1>

        {isActive && (
          <h3
          style={{ backgroundColor: data.accentColor }}
           className="text-[#f0f0f2] p-1 rounded-full">
            <FaCheck size={12} />
          </h3>
        )}
      </div>

      <p className="text-sm leading-5 text-[#7a87a9]">{data.description}</p>
    </div>
  );
};

export default TemplateCard;
