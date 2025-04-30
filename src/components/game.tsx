"use client";
import React, { useState } from 'react'
import ChooseButton from './game/ChooseButton';
import ShowComputerOption from './game/ShowComputerOption';
import ResultScreen from './game/ResultScreen';

type props = {
    setScore: React.Dispatch<React.SetStateAction<number>>
}

const Options = [
    "Paper",
    "Scissor",
    "Rock"
]

const Game = ({ setScore }: props) => {
    const [stage, setStage] = useState(1);

    const [userOption, setUserOption] = useState<"Paper" | "Scissor" | "Rock">("Paper")
    const [computerOption, setComputerOption] = useState<"Paper" | "Scissor" | "Rock">("Paper")
    const [result, setResult] = useState<"win" | "lose" | "draw">("lose")

    function play(player: "Paper" | "Scissor" | "Rock") {
        const computer = Options[Math.floor(Math.random() * 3)] as typeof player;

        setUserOption(player);
        setComputerOption(computer);

        const winMap = {
            Rock: "Scissor",
            Scissor: "Paper",
            Paper: "Rock"
        };

        let outcome: "win" | "lose" | "draw" = "draw";

        if (player === computer) {
            outcome = "draw";
        } else if (winMap[player] === computer) {
            outcome = "win";
            setScore((prev) => prev + 1);
        } else {
            outcome = "lose";
            setScore((prev) => prev - 1);
        }

        setResult(outcome);
        setStage(2);

        setTimeout(() => setStage(3), 1000);
    }

    function resetScore() {
        setScore(0);
        setStage(1)
    }

    function resetGame() {
        setStage(1);
    }

    switch (stage) {
        case 1:
            return <ChooseButton options={Options} play={play} />
        case 2:
            return <ShowComputerOption userOption={userOption} computerOption={computerOption} />
        case 3:
            return <ResultScreen userOption={userOption} computerOption={computerOption} resetGame={resetGame} resetScore={resetScore} result={result} />
        default:
            break;
    }

}



export default Game
