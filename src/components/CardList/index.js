// import { pairsOfCards } from "../../Utils/cards_2";
import { useEffect, useState } from "react";
import { useMemory } from "../../contexts/MemoryContext"; 
import Card from "../Card";
import { CardListContainer } from "./styles";

import { getStorage } from '../../services/Firebase'
import { ref, getDownloadURL } from "firebase/storage" 
import CardTwo from "../Card/CardTwo";

const storage = getStorage() 

const data = [
  'butterfly',
  'avocado',
  'banana',
  'bathroom',
  'breakfast',
  'closed',
  'dance',
  'eat',
  'fear'
] 
console.log('here in cards')

const CardList = () => { 
  // const { cards, startGame, setCards } = useMemory()
  const [cards, setCards] = useState([])
  const [sounds, setSounds] = useState([])

  const image = [{}]

  for (let i = 0; i < data.length; i++) {
    image[i] = {
      id: i + 1,
      id2: (i + 1) * -1,
      nameImg: data[i],
      linkImg: cards[i],
      linkSound: sounds[i]
    }
  }

  console.log('make obj', image)

  const promises = data.map((dt) => (
    getDownloadURL(ref(storage, `images/${dt}.jpeg`))
  ))
  
  const audioPromises = data.map((dt) => (
    getDownloadURL(ref(storage, `audio/${dt}.mp3`))
  ))

  useEffect(() => {
    Promise.all(promises)
      .then((urls) => setCards(urls))

    Promise.all(audioPromises)
      .then((audios) => setSounds(audios))
  },[])

  // const uniqueCards = cards.map((img, bothId) => ({
  //   bothId,
  //   img,
  // }))

  // const uniqueSounds = sounds.map((sound, bothId) => ({
  //   bothId,
  //   sound,
  // }))
  
  // const pairsOfCards = [...uniqueCards, ...uniqueSounds].map(
  //   (card, id) => ({
  //   ...card, 
  //   id
  // }))
 
  // useEffect(() => {
  //   startGame()
  // }, [])
 
  return (
    <CardListContainer>
      {image.map((card) => (
        <Card key={card.id} {...card} /> 
      ))}

      {image.map((card) => ( 
          <CardTwo key={card.id2} {...card} />
        ))}
    </CardListContainer>
  );
};

export default CardList