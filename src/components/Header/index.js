import { useMemory } from "../../contexts/MemoryContext"
import { ContainerHeader, ResultBox } from "./styles"

const Header = () => {
  const { hiddenHeader } = useMemory()
  
  return (
    <ContainerHeader hiddenHeader={hiddenHeader}>
      <ResultBox>
        <div>
          <h1>Jogo da Memória</h1> 
        </div>
        <div>Jogadores:</div>
        <div>Pontos:</div>
      </ResultBox>
    </ContainerHeader>
  )
}

export default Header