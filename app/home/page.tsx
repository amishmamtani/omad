"use client";

import { useState } from "react";

export default function Home() {
  const [memories, setMemories] = useState([
    { date: "17th Jan 2024", color: "bg-blue-400" },
  ]);

  const addMemory = () => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    setMemories([
      ...memories,
      { date: `${formattedDate}`, color: "bg-green-400" }, // Add a new memory with today's date
    ]);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      {/* Greeting */}
      <h1 className="text-5xl font-junicode text-yellow-400 mb-10">
        Hi, How was your day?
      </h1>

      {/* Memories Section */}
      <div className="w-4/5">
        <h2 className="text-2xl font-junicode text-white mb-6">
          Your recent memories
        </h2>
        <div className="flex space-x-6">
          {memories.map((memory, index) => (
            <div
              key={index}
              className={`w-24 h-32 ${memory.color} flex items-end justify-center rounded-md shadow-md p-2`}
            >
              <p className="text-white text-sm">{memory.date}</p>
            </div>
          ))}
          {/* Add Memory Button */}
          <button
            onClick={addMemory}
            className="w-24 h-32 flex items-center justify-center border-2 border-dashed border-white rounded-md text-white text-2xl hover:bg-gray-800 transition"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
