import React, { useRef, useState } from "react" 
import { useMemory } from "../../contexts/MemoryContext"

import './styles.css'

const Card = ({ id, bothId, img }) => {
  const { showCard, idFoundCards } = useMemory() 
	const [hovered, setHovered] = useState(false)
  const audioRef = useRef(null)
  const flipped = idFoundCards.includes(id)

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play()
    }
  } 

	const handleClick = () => { 
    showCard({ id, bothId })
	} 

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
        "back"
        <audio ref={audioRef}>
          <source src="https://firebasestorage.googleapis.com/v0/b/letmeask-333417.appspot.com/o/guava.mp3?alt=media&token=9954a02d-e0cd-4010-b78d-3f91809b9391" />
        </audio>
      </div>
		</div>
	)
}

export default Card
