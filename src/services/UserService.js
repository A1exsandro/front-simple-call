import axios from "axios"

export default class UserService {
  constructor() {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_API_LOGIN
    })
  }

  async login(data) {
    // const { dataUsers } = await this.axios.post('/login', data)
    const dataUsers = { name: 'first', email: 'first@email.com', token: '1234567'}
  
    if(dataUsers) {
      localStorage.setItem("name", dataUsers.name)
      localStorage.setItem("email", dataUsers.email)
      localStorage.setItem("token", dataUsers.token)
  
      return true
    }
  
    return
  }

  async register(data) {
    return this.axios.post('/user', data)
  }

  userAuth() {
    return localStorage.getItem("token") !== undefined ? true : false
    //return typeof localStorage.getItem("token")
  }

  async logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("name")
    localStorage.removeItem("email")
  }
}

