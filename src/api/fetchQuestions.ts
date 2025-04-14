import { Question } from "../data/types";

export const fetchQuestions = async (): Promise<Question[]> => {
  try {
    const response = await fetch("/db.json");

    if (!response.ok) {
      throw new Error(`Failed to fetch questions. Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data); // This logs the full response: { status, data, message, activity }

    const questions = data?.data?.questions; // ✅ Corrected path

    if (!questions || questions.length === 0) {
      console.log("No questions available");
      return [];
    }

    console.log(`Number of questions: ${questions.length}`);
    return questions;

  } catch (error) {
    console.error("Error fetching questions:", error);
    return [];
  }
};
