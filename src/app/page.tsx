"use client";
import Game from "@/components/game";
import Header from "@/components/header";
import Rules from "@/components/rules";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {

  const [score, setScore] = useState(0);
  const [rules, setRules] = useState(false);


  return (
    <div className="relative bg-gradient-bg min-h-screen flex flex-col justify-between p-12 gap-10">

      <Header number={score} />

      <Game setScore={setScore} />

      <div className="w-full flex justify-center md:justify-end">
        <Button className="w-fit text-secondary cursor-pointer" variant={"outline"} size={"lg"} onClick={() => setRules(state => !state)}>Rules</Button>
      </div>

      {rules && (
        <Rules rules={rules} setRules={setRules} />
      )}


    </div>
  );
}
