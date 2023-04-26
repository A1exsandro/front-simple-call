import React, { useRef, useState } from "react" 
import { useMemory } from "../../contexts/MemoryContext"

import './styles.css'

const CardTwo = ({ id2, nameImg, linkImg, linkSound }) => {
  const { showCard, idFoundCards, idFoundPairsCards } = useMemory() 
	const [hovered, setHovered] = useState(false)
  const audioRef = useRef(null)
  const id = id2

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play()
    }
  } 

	const handleClick = () => { 
    showCard({ id })
    
    if (!flipped) {
      playAudio()
    }
	}  

  // console.log(id)
    // const flipped = true
  const flipped = idFoundCards.includes(id) 
	// console.log('lenghttwo', idFoundCards)
  // console.log('idFoundPairsCards', idFoundPairsCards)

	return (
		<div
			className={`card ${flipped ? "flipped" : ""}`}
			onClick={handleClick}  
      id={id}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<div className="card-face card-front">
				<h2>{nameImg}</h2>
			</div>
      <div className="card-face card-back">
         <h2>Back</h2>
        <audio ref={audioRef}>
          <source src={linkSound} />
        </audio>
      </div>
		</div>
	)
}

export default CardTwo