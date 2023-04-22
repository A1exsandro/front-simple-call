import CardList from "../../components/CardList"
import { MemoryContextProvider } from "../../contexts/MemoryContext"

const Words = () => {
 
  return (
    <MemoryContextProvider>
      <CardList />
    </MemoryContextProvider>
  )
}

export default Words