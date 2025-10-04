import React from "react";

const Welcome = ({ user }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-16 px-4">
     
      <h1 className="text-[40px] sm:text-[48px] font-semibold mb-2 bg-gradient-to-r from-[#8ab4f8] via-[#4285f4] to-[#1a73e8] text-transparent bg-clip-text leading-tight">
        Hello, {user}
      </h1>

     
      <p className="text-[22px] sm:text-[24px] font-normal text-[#e0e0e0]/80 tracking-wide">
        What should we do today?
      </p>
    </div>
  );
};

export default Welcome;







