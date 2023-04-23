import React, { useRef, useState } from "react" 
import { useMemory } from "../../contexts/MemoryContext"

import './styles.css'

const Card = ({ id, bothId, img, sound }) => {
  const { showCard, idFoundCards, idFoundPairsCards } = useMemory() 
	const [hovered, setHovered] = useState(false)
  const audioRef = useRef(null)

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play()
    }
  } 

	const handleClick = () => { 
    showCard({ id, bothId })
    
    if (!flipped) {
      playAudio()
    }
	}  

  const flipped = idFoundPairsCards.includes(bothId) || idFoundCards.includes(id)
  console.log('lenght', idFoundCards.length)
	return (
		<div
			className={`card ${flipped ? "flipped" : ""}`}
			onClick={handleClick}  
      id={id}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<div className="card-face card-front">
				<img src={img} alt={`Carta ${id}`} />
			</div>
      <div className="card-face card-back">
         <h4>Game Of English</h4>
        <audio ref={audioRef}>
          <source src={sound} />
        </audio>
      </div>
		</div>
	)
}

export default Card
