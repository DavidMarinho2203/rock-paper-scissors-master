"use client"
import React, { useEffect, useState } from 'react'
import ButtonGame from '../buttonGame'
import { Button } from '../ui/button'

type props = {
    resetScore: () => void,
    resetGame: () => void,
    userOption: "Paper" | "Scissor" | "Rock",
    computerOption: "Paper" | "Scissor" | "Rock",
    result: "win" | "lose" | "draw"
}

const ResultScreen = ({ userOption, computerOption, resetScore, resetGame, result }: props) => {

    const [screen, setScreen] = useState(0)
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)

        const handleResize = () => setScreen(window.innerWidth)

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    if (!isClient) return null

    return (
        <>
            {screen < 768 ? (
                <div className='w-full flex flex-col justify-center items-center gap-15 h-full '>
                    <div className='flex justify-center items-center gap-10 '>
                        <div className='flex flex-col md:flex-col-reverse justify-center items-center gap-2'>
                            <ButtonGame className={`static ${result == "win" ? "shadow-winner-ring" : ""}  left-0 right-0 bottom-0 top-0`} item={userOption} />
                            <h2 className="text-sm mt-1 text-white text-center font-bold">You Picked</h2>
                        </div>

                        <div className='flex flex-col md:flex-col-reverse justify-center items-center gap-2'>
                            <ButtonGame className={`static ${result == "lose" ? "shadow-winner-ring" : ""}  left-0 right-0 bottom-0 top-0`} item={computerOption} />
                            <h2 className="text-sm mt-1 text-white text-center font-bold">Computer Picked</h2>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <h2 className="text-4xl text-white text-center font-bold">You {result}</h2>
                        <Button className='hover:text-Rock cursor-pointer' variant={"secondary"} size={"lg"} onClick={() => resetGame()} >Play Again</Button>
                        <Button className='hover:text-Rock cursor-pointer' variant={"secondary"} size={"lg"} onClick={() => resetScore()} >Resetar Pontuação</Button>
                    </div>
                </div>
            ) : (
                <div className='w-full flex flex-col justify-center items-center gap-10 h-full '>
                    <div className='flex justify-center items-center gap-10 '>

                        <div className='flex flex-col md:flex-col-reverse justify-center items-center gap-2 md:gap-5'>
                            <ButtonGame className={`static w-50 h-50 ${result == "win" ? "shadow-winner-ring" : ""}  left-0 right-0 bottom-0 top-0 `} item={userOption} />
                            <h2 className="text-sm md:text-lg mt-1 text-white text-center font-bold">You Picked</h2>
                        </div>

                        <div className='flex flex-col justify-center items-center gap-2'>
                            <h2 className="text-4xl text-white text-center font-bold">You {result}</h2>
                            <Button className='hover:text-Rock cursor-pointer' variant={"secondary"} size={"lg"} onClick={() => resetGame()} >Play Again</Button>
                            <Button className='hover:text-Rock cursor-pointer' variant={"secondary"} size={"lg"} onClick={() => resetScore()} >Resetar Pontuação</Button>
                        </div>

                        <div className='flex flex-col md:flex-col-reverse justify-center items-center gap-2 md:gap-5'>
                            <ButtonGame className={`static w-50 h-50 ${result == "lose" ? "shadow-winner-ring" : ""}  left-0 right-0 bottom-0 top-0 `} item={computerOption} />
                            <h2 className="text-sm md:text-lg mt-1 text-white text-center font-bold">Computer Picked</h2>
                        </div>
                    </div>
                </div>
            )
            }
        </>
    )
}

export default ResultScreen
