import GlobalStyle from './global'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom" 
import UserContext from './contexts/UserContext'

import { Container } from './styles'
 
import Home from './pages/Home' 
import Call from './pages/Call'
import Calls from './pages/Calls'
import SingUp from './pages/SingUp'
import Register from './pages/Register'
 
import NavBar from './components/NavBar' 
import Student from './components/Students'
 
function App() { 
  const [logAdmin, setLogAdmin] = useState(false)
  const loginAdmin = process.env.REACT_APP_LOGIN_ADMIN

  const sendToParent = (childData) => {
    const data = JSON.parse(childData)  
    data.name === loginAdmin && setLogAdmin(true) 
  }
  
  return (
    <UserContext.Provider value={{ user: "trying" }}>
      <Container> 
      {  logAdmin  ?  
          <BrowserRouter>
            <NavBar /> 
            <Routes>
              <Route path="/" element={<Home />} /> 
              <Route path="/call" element={<Call />} />
              <Route path="/calls" element={<Calls />} /> 
              <Route path="/students" element={<Student />} />
              <Route path="/singup" element={<SingUp sendToParent={sendToParent}/>} /> 
              <Route path="/Register" element={<Register />} />
            </Routes>
          </BrowserRouter> :

          <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />  
            <Route path="/calls" element={<Calls />} /> 
            <Route path="/students" element={<Student />} /> 
            <Route path="/singup" element={<SingUp sendToParent={sendToParent}/>} /> 
          </Routes>
          </BrowserRouter>
        }
        <GlobalStyle />
      </Container> 
    </UserContext.Provider> 
  ) 
}

export default App 
