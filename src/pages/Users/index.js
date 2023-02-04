import { useEffect, useState } from "react"
import axios from 'axios' 

const baseURL = process.env.REACT_APP_BASE_URL

const Users = () => {
  const [users, setUsers] = useState([{}])

  useEffect(() => {
    axios.get(`${baseURL}/users`).then((response) => {
      setUsers(response.data)
    })
  },[]) 

  return (
    <>
      <div>User</div>
      {
        users.map((user, index) => (
          <div key={index}>{user.name} - {user.email}</div>
        ))
      }
    </>
  )
}
 
export default Users
