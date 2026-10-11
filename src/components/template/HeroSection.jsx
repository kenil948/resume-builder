// import React from 'react'

const HeroSection = () => {
  return (
    <div className="w-full py-8 sm:py-12 md:h-70 flex flex-col justify-center items-center px-4 text-center">
      <h2 className="text-[#d3b062] font-semibold tracking-widest text-xs sm:text-sm uppercase">
        <span className="tracking-[0.2em] sm:tracking-[0.25em]">step</span> 1{" "}
        <span className="tracking-[0.2em] sm:tracking-[0.25em]">of</span> 3
      </h2>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a2e] my-3">
        Choose Your Template
      </h1>
      <p className="text-[#7a7568] w-full max-w-xl text-sm sm:text-base md:text-lg">
        Select the design that best represents you. You can always switch later while editing.
      </p>
    </div>
  );
};

export default HeroSection