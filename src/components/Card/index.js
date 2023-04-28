import React, { useRef, useState } from "react" 
import { useMemory } from "../../contexts/MemoryContext"

import './styles.css'

const Card = ({ id, nameImg, linkImg, linkSound }) => {
  const { showCard, idFoundCards, idFoundPairsCards, setIdFoundPairsCards, cards } = useMemory() 
	const [hovered, setHovered] = useState(false)
  const audioRef = useRef(null)

  const ids = [idFoundCards[0], idFoundCards[1]]

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play()
    }
  } 

	const handleClick = () => { 
    // const someCards = checkCards(ids)
    showCard({ id, nameImg })
    
    if (!flipped) {
      playAudio()
    } 
	}    

  // console.log(cards)

  const flipped = idFoundCards.includes(id) || idFoundPairsCards.includes(nameImg)

	return (
		<div
			className={`card ${flipped ? "flipped" : ""}`}
			onClick={handleClick}  
      id={id}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<div className="card-face card-front">
				<img src={linkImg} alt={`Carta ${id}`} />
			</div>
      <div className="card-face card-back">
         <h2>Back</h2>
        <audio ref={audioRef}>
          <source src={cards.linkSound} />
        </audio>
      </div>
		</div>
	)
}

export default Card
