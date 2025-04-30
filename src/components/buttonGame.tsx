import Image from 'next/image'
import React from 'react'

type props = {
  className?: string,
  item: string,
  play?: (string: "Paper" | "Scissor" | "Rock") => void,
}



const ButtonGame = ({className, item, play }: props) => {
  return (
    <button className={`btt-${item} w-30 h-30 rounded-full flex items-center justify-center z-10 shadow-lg  bg-white border-16 ${className}
    `} onClick={() => play && play(item as "Paper" | "Scissor" | "Rock")}>
      <Image
        src={`/assets/images/icon-${item.toLocaleLowerCase()}.svg`}
        alt={item}
        width={50}
        height={50}
        className="w-10 h-10 md:w-20 md:h-20"
        priority={true}
      />
    </button>
  )
}

export default ButtonGame
