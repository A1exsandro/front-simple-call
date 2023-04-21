import React, { useState } from "react" 
import Card from "../Card";
import { CardListContainer } from "./styles";

const CardList = ({ cards }) => {
  const [openCards, setOpenCards] = useState(0)

  const handleClick = () => {
    setOpenCards(openCards + 1)
	}

  return (
    <CardListContainer>
      {cards.map((card) => (
        <Card 
          key={card.id} 
          srcImg={card.srcImg} 
          front={card.front} 
          back={card.back} 
          openCards={openCards}
          onClick={handleClick} 
        />
      ))}
    </CardListContainer>
  );
};

export default CardList