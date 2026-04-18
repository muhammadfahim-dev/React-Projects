import React from "react";
import { House, RotateCcw, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

function CompletePage({ marks, length }) {
  return (
    <div className="mx-auto w-[60vw] p-5 shadow shadow-gray-500 flex flex-col justify-center my-5 bg-gray-100">
      <div className="w-full flex flex-col gap-1 items-center justify-center">
        <Trophy className="w-20 h-20" />
        <h1 className="text-[18px] font-bold text-green-600">
          Quiz Completed!
        </h1>

        <p className="text-[14px] text-gray-600 font-bold">{`You scored ${marks} out of ${length}`}</p>

        <p className="text-sm text-gray-500">{`great job! you got ${marks} out of ${length} questions correct`}</p>
      </div>

      <div className="flex flex-col gap-5 mt-4">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-sm font-bold text-gray-700">Your Score</h1>

          <div className="w-30 h-30 rounded-full border-5 border-gray-300 flex flex-col justify-center items-center">
            <p className="text-xl font-bold">{`${marks} / ${length}`}</p>
            <p className="text-sm font-bold">correct</p>
          </div>
        </div>

        <div className="w-full flex justify-center gap-30">
          <Link
            to={"/"}
            className="bg-blue-500 text-white rounded px-4 py-1 cursor-pointer text-sm flex justify-center items-center h-9 gap-1"
          >
            <RotateCcw className="w-5" />
            Retry Quiz
          </Link>

          <Link
            to={"/"}
            className="border border-gray-400 rounded px-4 py-1 cursor-pointer text-sm flex justify-center items-center h-9 gap-1"
          >
            <House />
            Go to Home
          </Link>
        </div>
      </div>

      <div className=""></div>
    </div>
  );
}

export default CompletePage;
