import { useState, useRef, useEffect } from "react";

const Input = ({ query, setQuery, askQuestion }) => {
  const taRef = useRef(null);

  // Auto-expand textarea like Gemini
  useEffect(() => {
    const el = taRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 220)}px`;
  }, [query]);

  return (
    <div className="sticky bottom-0 bg-[#0c0c0c] border-t border-zinc-900 px-4 py-4">
      <div className="max-w-3xl mx-auto">
        {/* Gemini-style container */}
        <div
          className="
            bg-[#1a1c1d]
            border
            border-[#3a3a3b]
            rounded-[2rem]
            shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)]
            px-6
            pt-4
            pb-2
            focus-within:border-[#5f6368]
            transition-all
            duration-200
          "
        >
          <div className="flex flex-col">
            {/* Textarea input */}
            <textarea
              ref={taRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && !e.shiftKey && askQuestion()
              }
              placeholder="Ask Gemini"
              rows={1}
              className="
                w-full
                resize-none
                bg-transparent
                text-white
                placeholder-gray-400
                outline-none
                text-[16px]
                leading-6
                overflow-hidden
                min-h-[70px]
                max-h-[220px]
              "
              style={{
                fontFamily: "Google Sans, Roboto, sans-serif",
              }}
            />

            {/* Icons below input */}
            <div className="flex items-center justify-between mt-4 text-gray-400 text-[17px]">
              <div className="flex items-center gap-4">
                <button className="hover:text-white transition-colors p-1">
                  <i className="fa-solid fa-plus"></i>
                </button>
                <button className="hover:text-white transition-colors p-1">
                  <i className="fa-solid fa-sliders"></i>
                </button>
              </div>

              {query.trim() ? (
                <button
                  onClick={askQuestion}
                  className="text-gray-400 text-[18px] hover:text-white transition-transform duration-150 p-2 active:scale-90"
                >
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              ) : (
                <button className="text-gray-400 text-[18px] hover:text-white transition-transform duration-150 p-2 active:scale-90">
                  <i className="fa-solid fa-microphone"></i>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Footer text */}
        <p className="text-center text-gray-400 text-sm mt-3">
          Gemini can make mistakes, so double-check it
        </p>
      </div>
    </div>
  );
};

export default Input;

