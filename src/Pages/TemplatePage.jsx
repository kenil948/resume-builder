import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/template/HeroSection";
import TemplateGrid from "../components/template/TemplateGrid";
import Button from "../components/common/Button";

const TemplatePage = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  return (
    <div className="w-full min-h-screen bg-[#f6f4ef] py-5">
      <Navbar />
      <HeroSection />
      <TemplateGrid
        selectedTemplate={selectedTemplate}
        setSelectedTemplate={setSelectedTemplate}
      />
      <Button selectedTemplate={selectedTemplate} />
    </div>
  );
};

export default TemplatePage;
