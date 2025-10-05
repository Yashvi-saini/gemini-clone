import React from "react";

const Welcome = ({ user }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 bg-[#1a1c1d]">
     
      <h1 className="text-[42px] sm:text-[48px] font-medium mb-0.2 bg-gradient-to-r from-[#1a73e8] via-[#4285f4] to-[#5488dbff] text-transparent bg-clip-text leading-tight" style={{
          fontFamily: "Google Sans, Roboto, sans-serif",
        }}>

        Hello, {user}
      </h1>
      <p className="text-[40px] sm:text-[46px] font-normal text-[#e8eaed]/60 tracking-tight" style={{
          fontFamily: "Google Sans, Roboto, sans-serif",
        }}>
        What should we do today?
      </p>
    </div>
  );
};

export default Welcome;
      







