import { pairsOfCards } from "../Utils/cards_2"

const { createContext, useContext, useState } = require("react")

const MemoryContext = createContext({})

export const MemoryContextProvider = (props) => {  
  const [cards, setCards] = useState([])
  const [openCards, setOpenCards] = useState([])
  const [idFoundCards, setIdFoundCards] = useState([])
  const [idFoundPairsCards, setIdFoundPairsCards] = useState([]) 

  const [numberOfShowCards, setNumberOfShowCards] = useState(0)
  const [score, setScore] = useState(0)

  const startGame = () => {
    setCards(pairsOfCards)
  }

  const checkCards = ([ id1, id2 ]) => {
    const idPair1 = cards.find(({ id }) => id === id1)?.bothId
    const idPair2 = cards.find(({ id }) => id === id2)?.bothId
    return idPair1 === idPair2
  }

  const showCard = ({ id, bothId }) => {
    setNumberOfShowCards((amount) => amount + 1)

    const turnedCard = idFoundCards.includes(id) || idFoundPairsCards.includes(bothId)
    if (turnedCard) return

    if (idFoundCards.length >= 2) {
      return 
    }

    if (idFoundCards.length == 0) {
      return setIdFoundCards([id])
    }

    const ids = [idFoundCards[0], id]
    setIdFoundCards(ids)

    const someCards = checkCards(ids) 
    if (someCards) {
      // make score after
      setIdFoundPairsCards((ids) => [...ids, bothId])
    }

    const time = someCards ? 0 : 2000

    setTimeout(() => {
      setIdFoundCards([])
    }, time)
  }

  return (
    <MemoryContext.Provider value={{ 
      openCards,
      setOpenCards,
      idFoundCards,
      setIdFoundCards,
      idFoundPairsCards,
      showCard,
      startGame, 
      cards
    }}>
      {props.children}
    </MemoryContext.Provider>
  )
}

export const useMemory = () => {
  return useContext(MemoryContext)
}
