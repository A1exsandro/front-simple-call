import { Link } from "react-router-dom"

import { HomeContainer, Content } from './styles'

function Home(){
	return(
    <HomeContainer>
      <Content>
        Never Stop Trying 
      </Content>
      <Content>
        <Link to="/call">Call</Link>
      </Content>
      <Content>
        <Link to="/SingUp">SingUp</Link> 
      </Content>
      <Content>
        <Link to="/Register">Register</Link>
      </Content>
    </HomeContainer>
	)
}

export default Home