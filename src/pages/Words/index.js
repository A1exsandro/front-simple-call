import CardList from "../../components/CardList"
import Header from "../../components/Header"
import { MemoryContextProvider } from "../../contexts/MemoryContext"

const Words = () => {
 
  return (
    <MemoryContextProvider>
      <Header />
      <CardList />
    </MemoryContextProvider>
  )
}

export default Words