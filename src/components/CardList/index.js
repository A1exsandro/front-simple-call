// import { pairsOfCards } from "../../Utils/cards_2";
import { useEffect, useState } from "react";
import { useMemory } from "../../contexts/MemoryContext";
import { audioPromises, promises } from "../../Utils/Cards_2";
import Card from "../Card";
import { CardListContainer } from "./styles";

const CardList = () => { 
  // const { cards, startGame, setCards } = useMemory()
  const [cards, setCards] = useState([])
  const [sounds, setSounds] = useState([])

  useEffect(() => {
    Promise.all(promises)
      .then((urls) => setCards(urls))

    Promise.all(audioPromises)
      .then((audios) => setSounds(audios))
  },[])

  const uniqueCards = cards.map((img, bothId) => ({
    bothId,
    img,
  }))

  const uniqueSounds = sounds.map((sound, bothId) => ({
    bothId,
    sound,
  }))
  
  const pairsOfCards = [...uniqueCards, ...uniqueSounds].map(
    (card, id) => ({
    ...card, 
    id
  }))
   console.log('mmmmmmmm', pairsOfCards)
   console.log('aaasasasa', sounds)

  // useEffect(() => {
  //   startGame()
  // }, [])
  console.log('here in card list === cards', cards) 

  return (
    <CardListContainer>
      {pairsOfCards.map((card) => (
        <Card key={card.id} {...card}/>
      ))}
    </CardListContainer>
  );
};

export default CardList