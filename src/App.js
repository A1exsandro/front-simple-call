import GlobalStyle from './global'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom" 
import UserContext from './contexts/UserContext' 

import { Container } from './styles'
 
import Home from './pages/Home' 
import Call from './pages/Call'
import Calls from './pages/Calls' 
import Register from './pages/Register'
 
import NavBar from './components/NavBar' 
import Login from './pages/Login'
import Users from './pages/Users'
import RegisterStudent from './pages/RegisterStudent'
import Student from './pages/Students'
import FaceApi from './pages/FaceApi'
 
function App() { 
  const [logAdmin, setLogAdmin] = useState(true)
  // const loginAdmin = process.env.REACT_APP_LOGIN_ADMIN
  // const loginAdmin = 'Alex'

  // const sendToParent = (childData) => {
  //   const data = JSON.parse(childData)  
  //   data.name === loginAdmin && setLogAdmin(true) 
  // }
  
  return (
    <UserContext.Provider value={{ user: "trying" }}>
      <Container> 
      {  logAdmin  ?  
          <BrowserRouter>
            <NavBar /> 
            <Routes> 
              <Route path="/home" element={<Home />} />
              <Route path="/users" element={<Users />} />  
              <Route path="/call" element={<Call />} />
              <Route path="/calls" element={<Calls />} /> 
              <Route path="/students" element={<Student />} />
              <Route path="*" element={<Login/>} /> 
              <Route path="/register" element={<Register />} />
              <Route path="/face-api" element={<FaceApi />} />
              <Route path="/register-student" element={<RegisterStudent />} />
            </Routes>
          </BrowserRouter> :

          <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/home" element={<Home />} /> 
            <Route path="/users" element={<Users />} /> 
            <Route path="/calls" element={<Calls />} /> 
            <Route path="/students" element={<Student />} /> 
            <Route path="/face-api" element={<FaceApi />} />
            <Route path="/singup" element={<Login/>} /> 
          </Routes>
          </BrowserRouter>
        }
        <GlobalStyle />
      </Container> 
    </UserContext.Provider> 
  ) 
}

export default App 
