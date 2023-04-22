// import { pairsOfCards } from "../../Utils/cards_2";
import { useEffect } from "react";
import { useMemory } from "../../contexts/MemoryContext";
import Card from "../Card";
import { CardListContainer } from "./styles";

const CardList = () => { 
  const { cards, startGame } = useMemory()

  useEffect(() => {
    startGame()
  }, [])

  return (
    <CardListContainer>
      {cards.map((card) => (
        <Card key={card.id} {...card}/>
      ))}
    </CardListContainer>
  );
};

export default CardList