"use client";

import Button from "@/components/button";
import Timer from "@/components/timer";
import { useState } from "react";

export default function Home() {
  const [time, setTime] = useState(2400);

  return (
    <div>
      <div className="flex justify-center items-center mt-[25vh]">
        <div className="fixed p-4 text-xl font-mono bottom-0 xl:top-0 left-0">
          <h1 className="mb-10">very simple pomodoro timer</h1>
          <p className="mb-10">made by me</p>
          <p className="mb-10 ">press space to pause/resume timer</p>
          <a
            target="_blank"
            href="https://github.com/TimofeyShelestov"
            className="hover:text-green-900"
          >
            github
          </a>
        </div>
        <Button
          title="Pomodoro"
          onClick={() => setTime(2400)}
          className="mr-7 block"
        />
        <Button
          title="Short Break"
          onClick={() => setTime(600)}
          className="mr-7"
        />
        <Button
          title="Long Break"
          onClick={() => setTime(1200)}
          className="mr-7"
        />
      </div>

      <div>
        <Timer
          time={time}
          className="text-center text-2xl font-bold mt-[10vh]"
        />
      </div>
    </div>
  );
}
