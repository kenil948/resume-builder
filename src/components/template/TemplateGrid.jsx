// import React from "react";
import TemplateCard from "./TemplateCard";
import { templates } from "../../data/Template";

const TemplateGrid = ({ selectedTemplate, setSelectedTemplate }) => {
  return (
    <>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5 px-4 sm:px-6 lg:px-8 justify-items-center min-h-[50vh] h-auto pb-6">
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
