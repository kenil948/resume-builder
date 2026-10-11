// import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Button = ({ selectedTemplate }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (!selectedTemplate) {
      toast.info("Please select a resume template first.");
      return;
    }

    localStorage.setItem("selectedTemplate", selectedTemplate);
    navigate("/builder");
  };

  return (
    <div className="flex justify-center sm:justify-end px-4 sm:px-8 md:px-14 mt-5 pb-6">
      <button
        onClick={handleClick}
        className="px-7 py-3 rounded-xl text-[#f6f4ef] bg-[#1a2744] font-bold tracking-wide text-sm flex items-center gap-2 cursor-pointer active:scale-95 transition-all duration-300"
      >
        Start Building <FaArrowRight />
      </button>
    </div>
  );
};

export default Button;
