import React, { useState } from "react" 

import './styles.css'

const Card = ({ front, back}) => {
	const [flipped, setFlipped] = useState(false)
	const [hovered, setHovered] = useState(false)

	const handleClick = () => {
		setFlipped(!flipped)
	}

	return (
		<div
			className={`card ${flipped ? "flipped" : ""}`}
			onClick={handleClick}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<div className="card-face card-front">{front}</div>
			<div className="card-face card-back">{back}</div>
		</div>
	)
}

export default Card
