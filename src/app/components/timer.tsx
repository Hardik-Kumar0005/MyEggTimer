import React, { useEffect, useState } from 'react';

export function getEggModeDuration(mode: string): number {
  switch (mode) {
    case 'soft':
      return 180; // 3 min
    case 'medium':
      return 300; // 5 min
    case 'hard':
      return 480; // 8 min
    case 'very-hard':
      return 600; // 10 min
    default:
      return 180;
  }
}

export type TimerProps = {
  duration: number; // seconds
  onComplete?: () => void;
};

// Timer component displays countdown and calls onComplete when finished
export const Timer: React.FC<TimerProps> = ({ duration, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      if (onComplete) onComplete();
      return;
    }
    const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timerId);
  }, [timeLeft, onComplete]);

  // Format time as mm:ss
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="text-5xl font-bold text-center py-6">
      {formatTime(timeLeft)}
    </div>
  );
};
