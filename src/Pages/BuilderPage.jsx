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
import { useResumeEditor } from "../hooks/useResumeEditor";

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
  const [mobileTab, setMobileTab] = useState("editor");
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

  const { setSavedStyle } = useResumeEditor();

  useEffect(() => {
    if (!localStorage.getItem("resumeData")) {
      setSavedStyle({});
      return;
    }
    const allStyles = JSON.parse(localStorage.getItem("resumeStyle") || "{}");
    const isScoped = Object.keys(allStyles).some((k) =>
      ["classic", "modern", "creative", "minimal", "executive"].includes(k),
    );
    setSavedStyle(isScoped ? allStyles[selectedTemplate] || {} : allStyles);
  }, [selectedTemplate, setSavedStyle]);

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
    <div className="w-full min-h-screen lg:h-screen flex flex-col bg-[#f6f4ef]">
      <BuilderNavbar
        onNewResume={handleNewResume}
        onDownload={handlePrint}
        template={template}
        onSwitchTemplate={() => setIsTemplateModalOpen(true)}
      />
      <hr className="text-[#eeeff1] w-full" />
      <div className="lg:hidden flex border-b border-[#e9e7e4] bg-[#efece5] p-1 gap-1">
        <button
          onClick={() => setMobileTab("editor")}
          className={`flex-1 py-2 text-xs font-semibold rounded-md transition-all ${
            mobileTab === "editor"
              ? "bg-[#1a2744] text-white shadow-sm"
              : "text-[#5a5965] hover:text-[#1a1a2e]"
          }`}
        >
          Form Editor
        </button>
        <button
          onClick={() => setMobileTab("preview")}
          className={`flex-1 py-2 text-xs font-semibold rounded-md transition-all ${
            mobileTab === "preview"
              ? "bg-[#1a2744] text-white shadow-sm"
              : "text-[#5a5965] hover:text-[#1a1a2e]"
          }`}
        >
          Resume Preview
        </button>
      </div>
      <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
        <LeftPanel
          className={mobileTab === "editor" ? "block" : "hidden lg:block"}
          form={form}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <RightPanel
          className={mobileTab === "preview" ? "block" : "hidden lg:block"}
          ref={resumeRef}
          form={form}
          template={template}
        />
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
