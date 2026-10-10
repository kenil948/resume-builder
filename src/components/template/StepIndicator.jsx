const StepIndicator = () => {
  return (
    <div className="flex gap-3 items-center">
      <div className="flex items-center gap-2">
        <span className="bg-[#1a2744] text-[#daffff] w-6 h-6 flex items-center justify-center rounded-full">
          1
        </span>
        <h2 className="text-[#1a1a2e] text-sm font-semibold">
          Choose Template
        </h2>
      </div>
      <hr className="w-10 text-[#dbdbda]" />
      <div className="flex items-center gap-2">
        <span className="border-2 border-[#dbdbda] text-[#7a7568] w-6 h-6 flex items-center justify-center rounded-full font-medium text-sm">
          2
        </span>
        <h2 className="text-[#868175] text-sm">Fill Details</h2>
      </div>
      <hr className="w-10 text-[#dbdbda]" />
      <div className="flex items-center gap-2">
        <span className="border-2 border-[#dbdbda] text-[#7a7568] w-6 h-6 flex items-center justify-center rounded-full font-medium text-sm">
          3
        </span>
        <h2 className="text-[#868175] text-sm">Download</h2>
      </div>
    </div>
  );
};

export default StepIndicator;
