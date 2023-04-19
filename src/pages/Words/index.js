import React from "react"
import CardList from "../../components/CardList"

const Words = () => {
  const cards = [
    { id: 1, front: "Front of card 1", back: "Back of card 1" },
    { id: 2, front: "Front of card 2", back: "Back of card 2" },
    { id: 3, front: "Front of card 3", back: "Back of card 3" },
  ]

  return (
    <CardList cards={cards} />
  )
}

export default Words