import React from "react";
import Choice from "./Choice";

function OptionCard({ question, answer, setAnswer }) {
  return (
    <div className="">
      <h1 className="text-[16px] font-bold my-5">{question.question}</h1>

      {question.options.map((option, i) => (
        <Choice option={option} key={i} setAnswer={setAnswer} answer={answer} />
      ))}
    </div>
  );
}

export default OptionCard;
