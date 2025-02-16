import { useEffect, useState } from "react";
import Button from "./button";

export default function Timer({
  className,
  time,
}: {
  className: string;
  time: number;
}) {
  const [timeLeft, setTimeLeft] = useState(time);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    setTimeLeft(time); // Reset time when `time` prop changes
    setIsRunning(false); // Restart the timer
  }, [time]);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return; // Stop if paused or finished

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [timeLeft, isRunning]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        setIsRunning((prev) => !prev);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className={className}>
      <div className="text-6xl font-mono font-light">
        {minutes}:{seconds.toString().padStart(2, "0")}
      </div>
      <div>
        <Button
          title={isRunning ? "Stop" : "Start"}
          className="mt-16"
          onClick={() => setIsRunning((isRunning) => !isRunning)}
        />
      </div>
    </div>
  );
}
