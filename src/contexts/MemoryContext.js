const { createContext, useContext, useState } = require("react")

const MemoryContext = createContext({})

export const MemoryContextProvider = (props) => {
  // const [contentCards, setContentCards] = useState([])
  const [openCards, setOpenCards] = useState([])
  const [idFoundCards, setIdFoundCards] = useState([]) 

  const [numberOfShowCards, setNumberOfShowCards] = useState(0)
  const [score, setScore] = useState(0)

  const showCard = ({ id, bothId }) => {
    setNumberOfShowCards((amount) => amount + 1)

    if (idFoundCards.length >= 2) {
      return setIdFoundCards([])
    }

    if (idFoundCards.length == 0) {
      return setIdFoundCards([id])
    }

    setIdFoundCards((ids) => [ids[0], id])

    const time = 2000

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
      showCard
    }}>
      {props.children}
    </MemoryContext.Provider>
  )
}

export const useMemory = () => {
  return useContext(MemoryContext)
}
