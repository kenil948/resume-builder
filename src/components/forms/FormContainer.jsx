// import React from "react";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

const FormContainer = ({ form, activeTab }) => {
  return (
    <div className="h-[calc(100%-48px)] overflow-y-auto bg-[#f6f4ef] p-5">
      {activeTab === "personal" && <Personal form={form} />}
      {activeTab === "education" && <Education form={form} />}
      {activeTab === "experience" && <Experience form={form} />}
      {activeTab === "skills" && <Skills form={form} />}
    </div>
  );
};

export default FormContainer;
