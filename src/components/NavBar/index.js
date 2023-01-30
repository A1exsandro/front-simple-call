import { Link } from "react-router-dom"

import { NavContainer, NavLink } from './styles'

function NavBar(){
  return (
    <NavContainer className="navbar">
      <div className="logo">
        <Link to="/">
          My Call
        </Link>
      </div>

      <NavLink>
        <Link to="/">Home</Link>
        <Link to="/call">Call</Link>
        <Link to="/calls">Calls</Link>
        <Link to="/students">Students</Link>
        <Link to="/SingUp">SingUp</Link> 
        <Link to="/Register">Register</Link>
      </NavLink>
    </NavContainer>
  )
}

export default NavBar