import GlobalStyle from './global'
import { BrowserRouter, Routes, Route } from "react-router-dom" 

import { Container } from './styles'
 
import Home from './pages/Home' 
import Call from './pages/Call'
import Calls from './pages/Calls'
 
import NavBar from './components/NavBar' 
import Student from './components/Students'
 
function App() {
  return (
    <Container>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/call" element={<Call />} />
          <Route path="/calls" element={<Calls />} /> 
          <Route path="/students" element={<Student />} /> 
        </Routes>
      </BrowserRouter>  
      <GlobalStyle />
    </Container>
  ) 
}

export default App 
