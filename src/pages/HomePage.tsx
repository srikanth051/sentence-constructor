import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-blue-100 via-white to-blue-200 bg-fixed flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="backdrop-blur-xl bg-white/30 border border-white/20 shadow-2xl rounded-3xl p-10 max-w-2xl w-full mx-6 text-white text-center"
      >
        <h1 className="text-5xl font-extrabold mb-8 text-gray-900 drop-shadow-lg">
          Sentence Construction Quiz
        </h1>

        <div className="text-lg mb-8 space-y-4 font-semibold text-gray-800">
          <p><span className="text-yellow-600">Total Questions:</span> <span className="font-bold text-yellow-500">10</span></p>
          <p><span className="text-yellow-600">Time per Question:</span> <span className="font-bold text-yellow-500">30 seconds</span></p>
          <p><span className="text-yellow-600">Marks per Correct Answer:</span> <span className="font-bold text-yellow-500">1</span></p>
        </div>

        <div className="bg-white/20 backdrop-blur-md rounded-lg p-6 text-sm mb-8 border border-white/10">
          <p className="mb-4 font-semibold text-gray-900">Instructions:</p>
          <ul className="list-disc list-inside space-y-2 text-left text-lg text-gray-800">
            <li>Each question has 4 blanks to be filled using the given options.</li>
            <li>Click the correct words in the right order to fill the blanks.</li>
            <li>Timer resets with each new question.</li>
            <li>You cannot skip questions without answering.</li>
          </ul>
        </div>

        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#fbbf24", color: "#000" }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold shadow-xl transition duration-300 hover:bg-yellow-400"
          onClick={() => navigate("/quiz")}
        >
          Start Quiz
        </motion.button>
      </motion.div>
    </div>
  );
};
