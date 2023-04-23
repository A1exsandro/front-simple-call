// import { Getdata } from "../services/Getdata"
import { promises } from "../Utils/Cards_2"

const { createContext, useContext, useState, useEffect } = require("react")

const MemoryContext = createContext({})

export const MemoryContextProvider = (props) => { 
  const [cards, setCards] = useState([])
  const [openCards, setOpenCards] = useState([])
  const [idFoundCards, setIdFoundCards] = useState([])
  const [idFoundPairsCards, setIdFoundPairsCards] = useState([]) 

  const [numberOfShowCards, setNumberOfShowCards] = useState(0)
  const [score, setScore] = useState(0)

  const startGame = () => {
    // const loadCards = Getdata()
    // setCards(loadCards)
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

    if (idFoundCards.length < 2) {
      setIdFoundCards((prev) => [...prev, id])
      return
    }

    const ids = [idFoundCards[0], id]
    setIdFoundCards(ids)

    // const someCards = checkCards(ids) 
    // if (someCards) {
    //   // make score after
    //   setIdFoundPairsCards((ids) => [...ids, bothId])
    // }

    // const time = someCards ? 0 : 2000

    setTimeout(() => {
      setIdFoundCards([])
    }, 2000) 
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
      cards,
      setCards 
    }}>
      {props.children}
    </MemoryContext.Provider>
  )
}

export const useMemory = () => {
  return useContext(MemoryContext)
} 
