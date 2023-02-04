import axios from "axios"

export default class UserService {
  constructor() {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL
    })
  }

  async login(data) {
    const { dataUsers } = await this.axios.get('/users', data)
    // const dataUsers = { name: 'first', email: 'first@email.com', token: '1234567'}
  
    if(dataUsers) {
      localStorage.setItem("name", dataUsers.name)
      localStorage.setItem("email", dataUsers.email)
      localStorage.setItem("password", dataUsers.password)
  
      return true
    }
  
    return
  }

  async register(data) {
    return this.axios.post('/users', data)
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

