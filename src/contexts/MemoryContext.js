const { createContext, useContext, useState, useEffect } = require("react")

const MemoryContext = createContext({})

export const MemoryContextProvider = (props) => { 
  const [cards, setCards] = useState([{}])
  const [openCards, setOpenCards] = useState([])
  const [idFoundCards, setIdFoundCards] = useState([])
  const [idFoundPairsCards, setIdFoundPairsCards] = useState([]) 

  const [numberOfShowCards, setNumberOfShowCards] = useState(0)
  const [score, setScore] = useState(0)

  const startGame = () => {
    // const loadCards = Getdata()
    // setCards(loadCards)
  }

  const open1 = idFoundCards[0]
  const open2 = idFoundCards[1]

  const checkCards = (open1, open2) => {
    const nameOfId1 = cards.find(({ id, id2 }) => id === open1 || id2 === open1)?.nameImg
    const nameOfId2 = cards.find(({ id, id2 }) => id === open2 || id2 === open2)?.nameImg
   
    if (nameOfId1 === nameOfId2) {
      setIdFoundPairsCards((prev) => [...prev, nameOfId1])
    } 
  }

  const showCard = ({ id, nameImg }) => {
    // setNumberOfShowCards((amount) => amount + 1)

    const turnedCard = idFoundCards.includes(id) || idFoundPairsCards.includes(nameImg)
    if (turnedCard) return

    if (idFoundCards.length < 2) {
      setIdFoundCards((prev) => [...prev, id]) 
    }

    // 
  }

  setTimeout(() => {
    if (idFoundCards.length > 1) { 
      checkCards(open1, open2)
      setIdFoundCards([])
    } 
  }, 1000)

  return (
    <MemoryContext.Provider value={{ 
      openCards,
      setOpenCards,
      idFoundCards,
      setIdFoundCards,
      idFoundPairsCards,
      setIdFoundPairsCards,
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
