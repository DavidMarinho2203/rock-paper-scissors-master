"use client";
import Game from "@/components/game";
import Header from "@/components/header";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [score, setScore] = useState(0);



  return (
    <div className="bg-gradient-bg min-h-screen p-12 flex flex-col justify-between items-center">
      
      <Header number={score} />

      <Game setScore={setScore} />

      <div>
        
      </div>

    </div>
  );
}
