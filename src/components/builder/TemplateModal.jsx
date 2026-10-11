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
            className={`w-[92%] sm:w-[90%] max-w-5xl lg:max-w-6xl max-h-[85vh] flex flex-col rounded-3xl bg-white p-4 sm:p-5 lg:p-6 shadow-2xl transition-all duration-200 ${isOpen
                ? "scale-100 opacity-100"
                : "scale-95 opacity-0"
                }`}
        >

            <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[#e3e5e8] flex-shrink-0">
                <div>
                    <h2 className="text-[#1a1a2e] text-lg sm:text-xl lg:text-2xl font-semibold">Switch Template</h2>
                    <p className="text-xs sm:text-sm text-[#7a7568]">Your data will be preserved automatically.</p>
                </div>

                <button
                    onClick={onClose}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center cursor-pointer justify-center text-[#7a7568] hover:bg-[#f4f4f4] hover:text-[#1a2744] transition-all duration-200"
                >
                    <RxCross2 size={20} />
                </button>
            </div>

            <div className="mt-3 sm:mt-4 lg:mt-5 flex-1 overflow-y-auto pr-1 grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5 pb-3">
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