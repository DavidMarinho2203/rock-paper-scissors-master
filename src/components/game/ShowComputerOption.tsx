import React from 'react'
import ButtonGame from '../buttonGame'

type props = {
  userOption: "Paper" | "Scissor" | "Rock",
  computerOption: "Paper" | "Scissor" | "Rock",
}

const ShowComputerOption = ({ userOption, computerOption }: props) => {
  return (
    <div className='w-full flex justify-center items-center gap-10'>
      <div className='flex flex-col md:flex-col-reverse justify-center items-center gap-2 md:gap-4'>
        <ButtonGame className="relative md:w-40 md:h-40 left-0 right-0 bottom-0 top-0" item={userOption} />
        <h2 className="text-sm mt-1 text-white text-center font-bold md:text-xl">You Picked</h2>
      </div>

      <div className='flex flex-col md:flex-col-reverse justify-center items-center gap-2 md:gap-4'>
        <ButtonGame className="relative md:w-40 md:h-40 left-0 right-0 bottom-0 top-0" item={computerOption} />
        <h2 className="text-sm mt-1 text-white text-center font-bold md:text-xl">Computer Picked</h2>
      </div>
    </div>
  )
}

export default ShowComputerOption
