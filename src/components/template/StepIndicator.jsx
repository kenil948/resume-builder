const StepIndicator = () => {
  return (
    <div className="flex gap-2 sm:gap-3 items-center">
      <div className="flex items-center gap-1.5 sm:gap-2">
        <span className="bg-[#1a2744] text-[#daffff] w-6 h-6 flex items-center justify-center rounded-full text-xs font-semibold">
          1
        </span>
        <h2 className="text-[#1a1a2e] text-xs sm:text-sm font-semibold hidden xs:block">
          Choose Template
        </h2>
      </div>
      <hr className="w-4 sm:w-10 text-[#dbdbda]" />
      <div className="flex items-center gap-1.5 sm:gap-2">
        <span className="border-2 border-[#dbdbda] text-[#7a7568] w-6 h-6 flex items-center justify-center rounded-full font-medium text-xs">
          2
        </span>
        <h2 className="text-[#868175] text-xs sm:text-sm hidden sm:block">Fill Details</h2>
      </div>
      <hr className="w-4 sm:w-10 text-[#dbdbda]" />
      <div className="flex items-center gap-1.5 sm:gap-2">
        <span className="border-2 border-[#dbdbda] text-[#7a7568] w-6 h-6 flex items-center justify-center rounded-full font-medium text-xs">
          3
        </span>
        <h2 className="text-[#868175] text-xs sm:text-sm hidden sm:block">Download</h2>
      </div>
    </div>
  );
};

export default StepIndicator;
