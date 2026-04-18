import React, { useEffect, useState } from "react";
import Bar from "../components/Bar";
import OptionCard from "../components/OptionCard";
import { useNavigate } from "react-router-dom";

function QuizApp({ questions, index, setIndex, marks, setMarks }) {
  const [time, setTime] = useState(9);
  const [answer, setAnswer] = useState("");
  const [correctAns, setCorrectAns] = useState(false);

  const navigate = useNavigate();

  let currentQuestion = questions[index];

  useEffect(() => {
    if (!answer) return;

    if (answer === currentQuestion.correctAnswer) {
      setCorrectAns(true);
    } else {
      setCorrectAns(false);
    }
  }, [answer, currentQuestion]);

  useEffect(() => {
    setAnswer("");
    setCorrectAns(false);
    setTime(9);
  }, [index]);

  if (!questions || questions.length === 0) {
    return <p>No questions available</p>;
  }

  function nextQuestion() {
    // check first
    if (answer === currentQuestion.correctAnswer) {
      setMarks((prev) => prev + 1);
    }

    // then move
    if (index < questions.length - 1) {
      setIndex((prev) => prev + 1);
    } else {
      navigate("/complete");
    }
  }

  function prevQuestion() {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  }

  useEffect(() => {
    if (time === 0) {
      nextQuestion();
      setTime(9);
      return;
    }

    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIndex(0);
    setMarks(0);
  }, []);

  return (
    <div className="w-[60vw] mx-auto p-5 shadow shadow-gray-500 flex flex-col items-center">
      <div className="flex gap-5 w-full items-center justify-center">
        <hr className="border border-gray-400 w-50" />

        <h1 className="text-sm font-bold">
          {`Question: ${index + 1} of ${questions.length}`}
        </h1>

        <hr className="border border-gray-400 w-50" />
      </div>

      <Bar marks={marks} />

      <div className="bg-white p-5 rounded w-150 shadow shadow-gray-500 flex items-center flex-col gap-3">
        <OptionCard
          setAnswer={setAnswer}
          question={currentQuestion}
          answer={answer}
        />

        <div className="">
          {answer && <p>{correctAns ? "Correct ✔" : "Incorrect ❌"}</p>}
        </div>
      </div>

      <div className="flex justify-between items-center w-full mt-7 ">
        <button
          onClick={prevQuestion}
          className="bg-blue-500 text-white px-4 py-1 text-sm rounded border-none outline-none cursor-pointer"
        >
          Previous
        </button>

        <p>
          {" "}
          <span className="text-sm text-gray-500 font-bold">
            Time left:
          </span>{" "}
          <span
            className={`${time > 0 ? "text-black" : "text-red-500"} text-sm font-bold `}
          >
            {time > 0 ? `00:00:0${time}` : "Time is Up"}
          </span>
        </p>

        <button
          onClick={nextQuestion}
          className="bg-red-500 text-white px-6 py-1 text-sm rounded border-none outline-none cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default QuizApp;
