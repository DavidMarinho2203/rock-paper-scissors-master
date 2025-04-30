"use client"
import { X } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

type props = {
    rules: boolean,
    setRules: React.Dispatch<React.SetStateAction<boolean>>
}

const Rules = ({ rules, setRules }: props) => {

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
            {rules && (
                <>
                    {screen <= 768 ? (
                        <div className='fixed top-0 left-0 w-full h-screen z-50 flex items-center justify-center'>
                            <div className='relative w-full h-full bg-secondary flex flex-col justify-center items-center gap-10'>
                                <h2 className='uppercase font-bold text-4xl text-Dark'>Rules</h2>
                                <Image
                                    src='/assets/images/image-rules.svg'
                                    alt='rules'
                                    width={screen <= 768 ? 300 : 600}
                                    height={screen <= 768 ? 300 : 600}
                                    className='object-contain'
                                />
                                <X
                                    className='h-10 w-10 cursor-pointer text-Dark hover:text-red-500 duration-300 ease-in-out '
                                    onClick={() => setRules(false)}
                                />
                            </div>
                        </div>
                    ) : (
                        <div className='absolute top-[50vh] w-full h-screen left-0 z-50 flex items-center justify-center'>
                            <div className='relative w-[400px] h-[400px] flex flex-col justify-center items-center gap-10 bg-secondary rounded-lg border-2 p-12'>
                                <h2 className='uppercase font-bold text-4xl text-Dark text-start w-full'>Rules</h2>
                                <Image
                                    src='/assets/images/image-rules.svg'
                                    alt='rules'
                                    width={screen <= 768 ? 300 : 600}
                                    height={screen <= 768 ? 300 : 600}
                                    className='object-contain'
                                />
                                <X
                                    className='absolute top-7 right-10 h-8 w-8 text-Dark hover:text-red-500 duration-300 ease-in-out  cursor-pointer'
                                    onClick={() => setRules(false)}
                                />
                            </div>
                        </div>
                    )}

                </>
            )}
        </>
    )
}

export default Rules
