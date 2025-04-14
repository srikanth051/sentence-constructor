import React, { useEffect } from "react";

interface Props {
  time: number;
  setTime: (time: number) => void;
  onTimeout: () => void;
}

export const Timer: React.FC<Props> = ({ time, setTime, onTimeout }) => {
  useEffect(() => {
    if (time === 0) {
      onTimeout();
      return;
    }

    const interval = setInterval(() => {
      setTime(time - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return <div className="text-right text-gray-600">Time left: {time}s</div>;
};
