import { useEffect, useRef, useState } from "react";
import { templates } from "../data/Template";
import BuilderNavbar from "../components/builder/BuilderNavbar";
import LeftPanel from "../components/builder/LeftPanel";
import RightPanel from "../components/builder/RightPanel";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ResumeSchema } from "../validation/ResumeSchema";
import TemplateModal from "../components/builder/TemplateModal";
import { useReactToPrint } from "react-to-print";
import { Navigate, useNavigate } from "react-router-dom";

const BuilderPage = () => {
  const navigate = useNavigate();
  const savedData = JSON.parse(localStorage.getItem("resumeData"));
  const data = savedData ? savedData : null;

  const form = useForm({
    resolver: yupResolver(ResumeSchema),
    mode: "onBlur",
    defaultValues: data || {
      skills: "",
      education: [
        {
          degree: "",
          institution: "",
          graduationYear: "",
          gpa: "",
        },
      ],
      experience: [
        {
          jobTitle: "",
          company: "",
          startYear: "",
          endYear: "",
          description: "",
        },
      ],
    },
  });

  const resumeRef = useRef();
  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: "Resume",
  });

  const { watch } = form;
  const [activeTab, setActiveTab] = useState("personal");
  const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);

  useEffect(() => {
    const subscription = watch((value) => {
      localStorage.setItem("resumeData", JSON.stringify(value));
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  const [selectedTemplate, setSelectedTemplate] = useState(
    localStorage.getItem("selectedTemplate"),
  );

  const template = templates.find((item) => item.slug === selectedTemplate);

  if (!template) {
    return <Navigate to="/" replace />;
  }

  const handleNewResume = () => {
    const confirmNewResume = window.confirm(
      "Start a new resume?\nYour current resume data will be permanently removed.",
    );
    if (!confirmNewResume) return;
    form.reset();
    localStorage.removeItem("resumeData");
    localStorage.removeItem("selectedTemplate");

    navigate("/");
  };

  return (
    <div className="w-full h-screen">
      <BuilderNavbar
        onNewResume={handleNewResume}
        onDownload={handlePrint}
        template={template}
        onSwitchTemplate={() => setIsTemplateModalOpen(true)}
      />
      <hr className="text-[#eeeff1] w-full" />
      <div className="flex">
        <LeftPanel
          form={form}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <RightPanel ref={resumeRef} form={form} template={template} />
      </div>
      <TemplateModal
        isOpen={isTemplateModalOpen}
        selectedTemplate={selectedTemplate}
        setSelectedTemplate={setSelectedTemplate}
        onClose={() => setIsTemplateModalOpen(false)}
      />
    </div>
  );
};

export default BuilderPage;
