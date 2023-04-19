import { useContext } from "react"
import { Link } from "react-router-dom" 
import UserContext from "../../contexts/UserContext"

import { HomeContainer, Content } from './styles'

function Home(){
  const { user, callPage} = useContext(UserContext) 
  console.log(callPage)

	return(
    <HomeContainer>
      <Content>
        <Link to="/words">Never Stop Trying</Link> 
      </Content>
      <Content>
        <Link to="/call">Call</Link>
      </Content>
      <Content>
        <Link to="/SingUp">SingUp</Link> 
      </Content>
      <Content>
        <Link to="/register-student">Register Student</Link>
      </Content>
      <Content>
        {user}
      </Content>
    </HomeContainer>
	)
}

export default Home