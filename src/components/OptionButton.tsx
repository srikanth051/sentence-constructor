import React from "react";

interface Props {
  word: string;
  onClick: () => void;
  disabled?: boolean;
}

export const OptionButton: React.FC<Props> = ({ word, onClick, disabled }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
      onClick={onClick}
      disabled={disabled}
    >
      {word}
    </button>
  );
};
