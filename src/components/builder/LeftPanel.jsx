// import React from "react";
import BuilderTabs from "./BuilderTabs";
import FormContainer from "../forms/FormContainer";

const LeftPanel = ({ form, activeTab, setActiveTab, className = "" }) => {
  return (
    <div className={`w-full lg:w-[45%] h-[calc(100vh-120px)] lg:h-[calc(100vh-70px)] border-r-[#e6e5e2] ${className}`}>
      <BuilderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <hr className="border-[#e9e7e4] " />
      <FormContainer form={form} activeTab={activeTab}/>
    </div>
  );
};

export default LeftPanel;
