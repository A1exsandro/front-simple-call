import { pairsOfCards } from "../../Utils/cards_2";
import Card from "../Card";
import { CardListContainer } from "./styles";

const CardList = () => { 

  return (
    <CardListContainer>
      {pairsOfCards.map((card) => (
        <Card key={card.id} {...card}/>
      ))}
    </CardListContainer>
  );
};

export default CardList