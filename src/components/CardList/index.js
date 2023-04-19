import React from "react" 
import Card from "../Card";
import { CardListContainer } from "./styles";

const CardList = ({ cards }) => {
  return (
    <CardListContainer>
      {cards.map((card) => (
        <Card key={card.id} srcImg={card.srcImg} front={card.front} back={card.back} />
      ))}
    </CardListContainer>
  );
};

export default CardList