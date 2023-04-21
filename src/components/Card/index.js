import React, { useRef, useState } from "react" 

import './styles.css'

const Card = ({ front, back, srcImg, onClick, openCards }) => {
	const [flipped, setFlipped] = useState(false)
	const [hovered, setHovered] = useState(false)
  const audioRef = useRef(null)

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play()
    }
  }

  // // Code of Game 
  const [moves, setMoves] = useState(0)
  const [enableCards, setEnableCards] = useState(true)
  // const [firstCard, setFirstCard] = useState(true)

	const handleClick = () => { 
    if (enableCards && moves < 1 && openCards < 2) {
      setFlipped(!flipped)
      setMoves(moves + 1)

      if (flipped == false) {
        playAudio()
      } 
    } 
	}
  console.log('filho', openCards)

	return (
		<div
			className={`card ${flipped ? "flipped" : ""}`}
			onClick={() => {
        handleClick()
        moves < 1 && onClick()
      }} 
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<div className="card-face card-front">
				<img src={srcImg} alt={front} />
			</div>
      <div className="card-face card-back">
        {back}
        <audio ref={audioRef}>
          <source src="https://firebasestorage.googleapis.com/v0/b/letmeask-333417.appspot.com/o/guava.mp3?alt=media&token=9954a02d-e0cd-4010-b78d-3f91809b9391" />
        </audio>
      </div>
		</div>
	)
}

export default Card
