// import React from 'react'

import { RxCross2 } from "react-icons/rx"
import { templates } from "../../data/Template"
import TemplateCard from "./TemplateCard"
const TemplateModal = ({ onClose, selectedTemplate, setSelectedTemplate, isOpen }) => {
    const handleTemplateChange = (slug) => {
        if (slug === selectedTemplate) {
            onClose();
            return;
        }
        setSelectedTemplate(slug);
        localStorage.setItem("selectedTemplate", slug);
        onClose();
    };
    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-all duration-200 ${isOpen
                ? "opacity-100 visible"
                : "opacity-0 invisible pointer-events-none"
                }`}
        >
            <div
                className={`w-[820px] rounded-3xl bg-white p-8 shadow-2xl transition-all duration-200 ${isOpen
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-0"
                    }`}
            >

                <div className="flex items-start justify-between">
                    <div>
                        <h1 className="text-[#1a1a2e] text-2xl font-semibold">Switch Template</h1>
                        <p className="text-[#7a7568]">Your data will be preserved.</p>
                    </div>

                    <button
                        onClick={onClose}
                        className="w-9 h-9 rounded-full flex items-center cursor-pointer justify-center text-[#7a7568] hover:bg-[#f4f4f4] hover:text-[#1a2744] transition-all duration-200"
                    >
                        <RxCross2 size={20} />
                    </button>
                </div>

                <div className="mt-8 grid grid-cols-5 gap-5">
                    {templates.map((template) => (
                        <TemplateCard
                            key={template.slug}
                            template={template}
                            isSelected={selectedTemplate === template.slug}
                            onClick={() => handleTemplateChange(template.slug)}
                        />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default TemplateModal