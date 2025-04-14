import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")' }}>
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Adding overlay for readability */}
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 w-full max-w-2xl text-white text-center px-6 md:px-10 py-8 bg-white bg-opacity-50 rounded-3xl shadow-xl mx-auto"
      >
        <h1 className="text-5xl font-extrabold mb-8 text-white drop-shadow-2xl">
          Sentence Construction Quiz
        </h1>

        <div className="text-lg mb-8 space-y-4 font-semibold text-white">
          <p><span className="text-yellow-400">Total Questions:</span> <span className="font-bold text-yellow-300">10</span></p>
          <p><span className="text-yellow-400">Time per Question:</span> <span className="font-bold text-yellow-300">30 seconds</span></p>
          <p><span className="text-yellow-400">Marks per Correct Answer:</span> <span className="font-bold text-yellow-300">1</span></p>
        </div>

        <div className="bg-white bg-opacity-30 rounded-lg p-6 text-sm mb-8">
          <p className="mb-4 font-semibold text-white">Instructions:</p>
          <ul className="list-disc list-inside space-y-2 text-white text-left text-lg">
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
