import React from "react";
const Welcome = ({ user }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center text-white">
      <h1 className="text-4xl sm:text-5xl font-semibold mb-2">
        Hello, <span className="text-blue-500">{user}</span>
      </h1>
      <p className="text-gray-400 text-xl mb-8">What should we do today?</p>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl w-full px-4">
        {[
          { text: "style your photo with gemini",img:"/img1.jpg"},
          { text: "Create gemini ai images",img: "/img2.jpg" },
          { text: "style your way ",img:"/img3.jpg" },
          { text: "boost yourself with creativity",img:"/img4.jpg" },
        ].map((card, i) => (
          <div
            key={i}
            className="bg-zinc-800 hover:bg-zinc-700 transition rounded-2xl p-4 cursor-pointer text-left"
          >
            <img
              src={card.img}
              alt={card.text}
              className="rounded-xl mb-3 object-cover h-36 w-full"
            />
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Welcome;
