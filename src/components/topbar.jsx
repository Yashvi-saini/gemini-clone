
import React from "react";
import geminiLogo from "../assets/gemini_favicon.png";
import userLogo from "../assets/logo.jpg";

const Topbar = ({ model, setModel }) => {
  return (
    <>
      
      <link
        href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <style>
        {`
          .google-sans {
            font-family: 'Google Sans', sans-serif;
          }
        `}
      </style>

      <div className="bg-[#1a1c1d] px-4 py-3 sticky top-0 z-50">
        <div className="w-full flex justify-between items-start google-sans px-6">
          
          
          <div className="flex flex-col">
            <span className="text-[20px] font-medium text-[#e0e0e0]">
              Gemini
            </span>

            <div className="relative mt-1 w-fit">
              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="appearance-none bg-[#2a2b2d] text-[#c4c7c5] text-sm rounded-full px-3 py-1.5 pr-6 border border-[#3a3b3d] hover:border-[#5c5d60] focus:outline-none cursor-pointer transition-all"
              >
                <option value="flash">2.5 Flash</option>
                <option value="pro">1.5 Pro</option>
              </select>
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none">
                ▼
              </span>
            </div>
          </div>

        
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-[#2a2b2d] hover:bg-[#333537] px-3 py-1.5 rounded-full cursor-pointer border border-[#3a3b3d] transition-all">
              <img
                src={geminiLogo}
                alt="Gemini"
                className="w-4 h-4 object-contain"
              />
              <span className="text-sm text-gray-200 font-medium">Upgrade</span>
            </div>

            <img
              src={userLogo}
              alt="User"
              className="w-8 h-8 rounded-full border border-[#3a3b3d] object-cover cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;

