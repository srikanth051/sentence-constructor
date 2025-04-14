import React from "react";
import { useLocation } from "react-router-dom";
import { Question } from "../data/types";

export const ResultPage = () => {
  const location = useLocation();
  const { questions, answers } = location.state;

  let score = 0;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Results</h1>
      {questions.map((q: Question, idx: number) => {
        const correct = q.correctAnswer.join(" ") === answers[idx].join(" ");
        if (correct) score++;
        return (
          <div key={q.questionId} className="mb-4">
            <p className="font-semibold">{q.question}</p>
            <p>Your answer: {answers[idx].join(", ")}</p>
            <p>
              {correct ? (
                <span className="text-green-600">Correct ✅</span>
              ) : (
                <>
                  <span className="text-red-600">Incorrect ❌</span> <br />
                  <span className="text-sm">Correct Answer: {q.correctAnswer.join(", ")}</span>
                </>
              )}
            </p>
          </div>
        );
      })}
      <h2 className="mt-6 text-xl font-bold">Score: {score} / 10</h2>
    </div>
  );
};
