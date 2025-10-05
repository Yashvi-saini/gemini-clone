import { useState, useId, useEffect } from "react";
import "./App.css";
import { URL } from "./constants";
import Answer from "./components/answer";
import Welcome from "./components/welcome";
import geminilogo from "./assets/gemini_favicon.png";
import Topbar from "./components/topbar";
import Input from "./components/input"; 

function App() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState("flash");
  const id = useId();

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css";
    document.head.appendChild(link);
  }, []);

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
    <div className="flex flex-col h-screen bg-zinc-950 text-white overflow-hidden">
      <Topbar model={model} setModel={setModel} />

      {/* Chat content */}
      <div className="flex-1 overflow-y-auto  overflow-x-hidden px-4  py-6 chat-container bg-[#1a1c1d]">
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

              {/* thinking Gemini */}
              {loading && (
                <div className="flex items-center gap-2">
                  <img
                    src={geminilogo}
                    alt="Gemini"
                    className="w-8 h-8 rounded-full mt-1"
                  />
                  <div className="bg-blue-600 px-4 py-1.5 rounded-xl text-white text-sm animate-pulse">
                    Thinking..
                  </div>
                </div>
              )}
            </ul>
          )}
        </div>
      </div>

      {/* Gemini-style Input */}
      <Input query={query} setQuery={setQuery} askQuestion={askQuestion} />
    </div>
  );
}

export default App;


