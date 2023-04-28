import React, { useRef, useState } from "react" 
import { useMemory } from "../../contexts/MemoryContext"

import './styles.css'

const CardTwo = ({ id2, nameImg, linkImg, linkSound }) => {
  const { showCard, idFoundCards, idFoundPairsCards, cards } = useMemory() 
	const [hovered, setHovered] = useState(false)
  const audioRef = useRef(null)
  const id = id2

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play()
    }
  } 

	const handleClick = () => { 
    showCard({ id, nameImg })
    playAudio()
    if (flipped) {
      
    }
	}  

  const flipped = idFoundCards.includes(id) || idFoundPairsCards.includes(nameImg)

  console.log('----------', cards)
	
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
      </div>
      
      <div>
        <audio ref={audioRef}>
          <source src={cards.linkSound} />
        </audio>
      </div>
		</div>
	)
}

export default CardTwo