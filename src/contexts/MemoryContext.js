const { createContext, useContext, useState } = require("react")

const MemoryContext = createContext({})

export const MemoryContextProvider = (props) => {
  const [contentCards, setContentCards] = useState([]) 

  return (
    <MemoryContext.Provider value={{
      contentCards,
      setContentCards
    }}>
      {props.children}
    </MemoryContext.Provider>
  )
}

export const useMemory = () => {
  return useContext(MemoryContext)
}
