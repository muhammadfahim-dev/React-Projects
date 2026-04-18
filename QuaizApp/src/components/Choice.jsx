import React, { useEffect } from "react";

function Choice({ option, setAnswer, answer }) {
  return (
    <div className="w-100 bg-white p-2 text-sm flex gap-2 items-center rounded border border-gray-500 mb-3">
      <input
        value={option}
        checked={answer === option}
        onChange={(e) => setAnswer(option)}
        type="radio"
        name="choice"
        className="w-4 h-4 rounded-full appearance-none border border-e-gray-500 checked:bg-blue-500 cursor-pointer overflow-hidden"
      />

      <p>{option}</p>
    </div>
  );
}

export default Choice;
