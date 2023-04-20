import React, { useRef, useState } from "react" 

import './styles.css'

const Card = ({ front, back, srcImg}) => {
	const [flipped, setFlipped] = useState(false)
	const [hovered, setHovered] = useState(false)
  const audioRef = useRef(null)

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play()
    }
  }

	const handleClick = () => {
		setFlipped(!flipped)

    if (flipped == false) {
      playAudio()
    }
	}

	return (
		<div
			className={`card ${flipped ? "flipped" : ""}`}
			onClick={handleClick}
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
