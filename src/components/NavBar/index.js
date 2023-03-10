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
        <Link to="/home">Home</Link> 
        <Link to="/calls">Calls</Link>
        <Link to="/students">Students</Link> 
        <Link to="/users">Users</Link>
      </NavLink>
    </NavContainer>
  )
}

export default NavBar