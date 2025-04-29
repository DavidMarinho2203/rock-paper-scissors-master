import React from 'react'

const Header = ({ number }: { number: number }) => {
    return (
        <div className='container mx-auto flex justify-between items-center p-6 border-2 border-gray-400 rounded-lg shadow-sm'>
            <div>
                {["ROCK", "PAPER", "SCISSORS"].map((item, index) =>
                    <h2
                        key={index}
                        className={`text-foreground text-base md:text-2xl font-bold ${index === 0 ? 'text-Score' : ''}`}>
                        {item}
                    </h2>
                )}
            </div>

            <div className='flex flex-col justify-center items-center bg-foreground py-3 px-5 rounded-lg shadow-sm'>
                <p className='text-Score text-sm'>SCORE</p>
                <h2 className='text-Dark font-bold text-4xl'>{number}</h2>
            </div>
        </div>
    )
}

export default Header
