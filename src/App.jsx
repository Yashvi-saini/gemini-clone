import { useState, useId } from "react";
import "./App.css";
import { URL } from "./constants";
import Answer from "./components/answer";
import Welcome from "./components/welcome";
import geminilogo from './assets/gemini_favicon.png'
import Topbar from "./components/topbar"

function App() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState("flash");
  const id = useId();

  const user = "Yashvi";

  const askQuestion = async () => {
    if (!query.trim()) return;
    setLoading(true);

    const body = {
      contents: [
        {
          role: "user",
          parts: [{ text: query }],
        },
      ],
    };

    let response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    response = await response.json();
    let dataString = response.candidates[0].content.parts[0].text;
    dataString = dataString.split("* ").map((item) => item.trim());

    setResult((prev) => [
      ...prev,
      { type: "q", text: query },
      { type: "a", text: dataString },
    ]);
 setTimeout(() => {
  const chatContainer = document.querySelector(".chat-container");
  if (chatContainer) chatContainer.scrollTop = chatContainer.scrollHeight;
}, 100);


    setQuery("");
    setLoading(false);
  };

  return (
  <div className="flex flex-col h-screen bg-zinc-950 text-white">
    <div className="flex flex-col h-screen bg-zinc-950 text-white">
      <Topbar model={model} setModel={setModel} />
      
    

    {/* chat scrolling added */}
    <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6">
      <div className="max-w-2xl mx-auto space-y-4">
        {result.length === 0 ? (
          <Welcome user={user} />
        ) : (
          <ul className="space-y-4">
            {result.map((item, index) => (
              <div
                key={index}
                className={
                  item.type === "q"
                    ? "flex justify-end"
                    : "flex items-start gap-2"
                }
              >
                {item.type === "q" ? (
                  <li className="text-right p-3 bg-zinc-700 rounded-2xl w-fit max-w-[80%]">
                    <Answer
                      ans={item.text}
                      totalresult={1}
                      index={index}
                      type={item.type}
                    />
                  </li>
                ) : (
                  <div className="flex gap-2">
                    <img
                      src={geminilogo}
                      alt="Gemini"
                      className="w-8 h-8 rounded-full mt-1"
                    />
                    <div className="space-y-2">
                      {item.text.map((ansitem, ansindex) => (
                        <li
                          key={ansindex}
                          className="p-3 bg-zinc-800 rounded-2xl max-w-[80%]"
                        >
                          <Answer
                            ans={ansitem}
                            totalresult={item.text.length}
                            index={ansindex}
                            type={item.type}
                          />
                        </li>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Typing as gemini do */}
            {loading && (
              <div className="flex items-center gap-2">
                <img
                  src={geminilogo}
                  alt="Gemini"
                  className="w-8 h-8 rounded-full mt-1"
                />
                <div className="bg-zinc-800 px-4 py-2 rounded-2xl flex space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-150"></span>
                  <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-300"></span>
                </div>
              </div>
            )}
          </ul>
        )}
      </div>
    </div>

    {/* input at bottom */}
    <div className="bg-zinc-900 border-t border-zinc-800 p-4 sticky bottom-0">
      <div className="max-w-2xl mx-auto bg-zinc-800 rounded-2xl px-4 py-3 flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && askQuestion()}
          placeholder="Ask Gemini"
          className="w-full bg-transparent outline-none text-white placeholder-gray-400 resize-none"
        />
      </div>
    </div>
    </div>
  </div>
  
);
}
export default App
