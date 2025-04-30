"use client"
import React, { useEffect, useState } from 'react'
import ButtonGame from '../buttonGame'

type props = {
    options: string[],
    play: (string: "Paper" | "Scissor" | "Rock") => void
}

// Estilização dos locais onde os botões vão ficar
const buttonStyles = {
    Paper: " top-0 left-[-20] ",
    Scissor: " top-0 right-[-20] ",
    Rock: " bottom-0 left-[50%] translate-x-[-50%] ",
}

const ChooseButton = ({ options, play }: props) => {

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
                <div className="relative w-full max-w-[400px] mx-auto h-80">

                    <svg className="absolute top-0 left-0 w-full h-full z-0">
                        <line x1="100%" x2="0" y1="15%" y2="15%" stroke="#222" strokeWidth="20" /> {/* Esqueda Direita */}
                        <line x1="50%" x2="0" y1="320" y2="50" stroke="#222" strokeWidth="20" />{/* Esquerda Baixo */}
                        <line x1="100%" x2="50%" y1="15%" y2="100%" stroke="#222" strokeWidth="20" />{/* Direita Baixo */}
                    </svg>

                    {options.map((item, index) => (
                        <div key={index} >
                            <ButtonGame
                                className={'absolute hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer ' + Object.values(buttonStyles)[index]}
                                item={item}
                                play={play}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="relative w-full max-w-[400px] mx-auto h-80 ">

                    <svg className="absolute top-0 left-0 w-full h-full z-0 ">
                        <line x1="100%" x2="0" y1="15%" y2="15%" stroke="#222" strokeWidth="20" /> {/* Esqueda Direita */}
                        <line x1="50%" x2="0" y1="320" y2="50" stroke="#222" strokeWidth="20" />{/* Esquerda Baixo */}
                        <line x1="100%" x2="50%" y1="15%" y2="100%" stroke="#222" strokeWidth="20" />{/* Direita Baixo */}
                    </svg>

                    {options.map((item, index) => (
                        <div key={index} >
                            <ButtonGame
                                className={'absolute w-40 h-40 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer' + Object.values(buttonStyles)[index]}
                                item={item}
                                play={play}
                            />
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}


export default ChooseButton
