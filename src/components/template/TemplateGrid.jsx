// import React from "react";
import TemplateCard from "./TemplateCard";
import { templates } from "../../data/Template";

const TemplateGrid = ({ selectedTemplate, setSelectedTemplate }) => {
  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4 h-[62vh]">
        {templates.map((template) => {
          return (
            <TemplateCard 
              key={template.id}
              data={template}
              selectedTemplate={selectedTemplate}
              setSelectedTemplate={setSelectedTemplate}
            />
          );
        })}
      </div>

      <hr className="border-[#e9e7e4] mt-3" />
    </>
  );
};

export default TemplateGrid;
