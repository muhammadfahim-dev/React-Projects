import { useState } from "react";
import "./App.css";
import QuizApp from "./pages/QuizApp";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import data from "./services/data";
import CompletePage from "./pages/CompletePage";

function App() {
  const [questions, setQuestions] = useState(data);
  const [index, setIndex] = useState(0);
  const [marks, setMarks] = useState(0);

  return (
    <div className="w-full min-h-screen bg-blue-100">
      <Navbar length={questions.length} marks={marks} />
      <Routes>
        <Route
          path="/"
          element={
            <QuizApp
              questions={questions}
              index={index}
              setIndex={setIndex}
              marks={marks}
              setMarks={setMarks}
            />
          }
        />
        <Route
          path="/complete"
          element={<CompletePage length={questions.length} marks={marks} />}
        />
      </Routes>
    </div>
  );
}

export default App;
