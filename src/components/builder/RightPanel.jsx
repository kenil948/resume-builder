// import React from "react";

import EditorToolbar from "../../Pages/EditorToolbar";
import { useResumeEditor } from "../../hooks/useResumeEditor";

const RightPanel = ({ form, template, ref }) => {

  const { isEditMode } = useResumeEditor()
  const { watch } = form;

  const resumeData = watch();

  const SelectedTemplateComponent = template.component;
  return (
    <div className="w-[55%] h-[calc(100vh-70px)] bg-[#d7d3c8] print:h-auto px-6 py-6 overflow-y-auto">
      {isEditMode && (<div className="mb-27 flex items-center justify-center"><EditorToolbar /></div>)}
      <div ref={ref} className="w-full bg-white">
        <SelectedTemplateComponent resumeData={resumeData} />
      </div>
    </div>
  );
};

export default RightPanel;
