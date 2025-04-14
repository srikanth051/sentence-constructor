import React from "react";
import { OptionButton } from "./OptionButton";

interface Props {
  questionText: string;
  options: string[];
  filledWords: string[];
  onFill: (index: number, word: string) => void;
  onRemove: (index: number) => void;
}

export const SentenceQuestion: React.FC<Props> = ({
  questionText,
  options,
  filledWords,
  onFill,
  onRemove
}) => {
  const blanks = questionText.split("_____________");

  return (
    <div className="text-lg leading-8">
      {blanks.map((part, idx) => (
        <span key={idx}>
          {part}
          {idx < filledWords.length && (
            <button
              onClick={() => onRemove(idx)}
              className="bg-yellow-300 px-2 mx-1 rounded"
            >
              {filledWords[idx] || "_____"}
            </button>
          )}
        </span>
      ))}

      <div className="mt-6 flex gap-4 flex-wrap">
        {options.map((word, idx) => (
          <OptionButton
            key={idx}
            word={word}
            onClick={() => onFill(filledWords.indexOf("") ?? filledWords.length, word)}
            disabled={filledWords.includes(word)}
          />
        ))}
      </div>
    </div>
  );
};
