"use client";
import React from 'react'

type props = {
    setScore: React.Dispatch<React.SetStateAction<number>>
}

const Game = ({ setScore }: props) => {
    return (
        <div className="relative w-60 h-60 mx-auto mt-10">
            <button className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white border-[16px] border-blue-500 rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
                ✋ {/* ou um ícone */}
            </button>
            <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white border-[16px] border-red-500 rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
                ✊
            </button>
            <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white border-[16px] border-yellow-400 rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
                ✌️
            </button>
        </div>
    )
}

export default Game
