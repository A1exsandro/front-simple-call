import GlobalStyle from './global'

import Student from './components/Students'
import Call from './pages/Call'

import { Container, Content } from './styles'

function App() {
  return (
    <Container>
      {/* <Content>
        Never Stop Trying 
      </Content>
      <Student /> */}
      <Call />
      <GlobalStyle />
    </Container>
  ) 
}

export default App 
