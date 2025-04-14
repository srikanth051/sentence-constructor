import React, { useEffect, useState } from "react";
import { fetchQuestions } from "../api/fetchQuestions";
import { Question } from "../data/types";
import { SentenceQuestion } from "../components/SentenceQuestion";
import { Timer } from "../components/Timer";
import { useNavigate } from "react-router-dom";

export const QuizPage = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<string[][]>([]);
  const [time, setTime] = useState(30);
  const navigate = useNavigate();

  // Fetch questions and initialize answers
  useEffect(() => {
    fetchQuestions().then((data) => {
      setQuestions(data);
      setAnswers(Array(data.length).fill(["", "", "", ""]));
    });
  }, []);

  // Reset answers for the current question if not already filled
  useEffect(() => {
    setAnswers((prev) => {
      const updated = [...prev];
      if (!updated[currentIndex] || !updated[currentIndex].some((w) => w !== "")) {
        updated[currentIndex] = ["", "", "", ""];
      }
      return updated;
    });
  }, [currentIndex]);

  // Handle "Next" button logic
  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setTime(30);
    } else {
      navigate("/result", { state: { questions, answers } });
    }
  };

  // Add a word to the next empty blank
  const handleFill = (idx: number, word: string) => {
    setAnswers((prev) => {
      const updated = [...prev];
      const blanks = [...updated[currentIndex]];
      const slot = blanks.findIndex((w) => w === "");
      if (slot !== -1) {
        blanks[slot] = word;
        updated[currentIndex] = blanks;
      }
      return updated;
    });
  };

  // Remove a filled word
  const handleRemove = (idx: number) => {
    setAnswers((prev) => {
      const updated = [...prev];
      const blanks = [...updated[currentIndex]];
      blanks[idx] = "";
      updated[currentIndex] = blanks;
      return updated;
    });
  };

  if (questions.length === 0) return <div className="p-6">Loading questions...</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Timer time={time} setTime={setTime} onTimeout={handleNext} />
      <SentenceQuestion
        questionText={questions[currentIndex].question}
        options={questions[currentIndex].options}
        filledWords={answers[currentIndex]}
        onFill={handleFill}
        onRemove={handleRemove}
      />
      <button
        className="mt-6 bg-green-600 text-white px-6 py-2 rounded disabled:opacity-50"
        disabled={answers[currentIndex].includes("")}
        onClick={handleNext}
      >
        {currentIndex + 1 < questions.length ? "Next" : "Submit"}
      </button>
    </div>
  );
};
