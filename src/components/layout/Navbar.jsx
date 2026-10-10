import StepIndicator from "../template/StepIndicator";

const Navbar = () => {
  return (
    <>
      <div className="w-full text-[#1a1a2e]">
        <div className="flex h-10 px-10 items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              className="w-7 h-7 bg-[#1a2744] p-1.5 rounded-sm"
              src="/home.svg"
              alt="Home"
            />
            <h1 className="font-bold text-lg">ResuméCraft</h1>
          </div>
          <div>
            <StepIndicator />
          </div>
        </div>
        <hr className="border-[#e9e7e4] mt-4" />
      </div>
    </>
  );
};

export default Navbar;
