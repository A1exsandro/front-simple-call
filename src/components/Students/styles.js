import styled from 'styled-components'
 
export const StudentContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

  width: 100%; 
  background: #4e4c57; 
  border-radius: 10px;
  padding: .5rem;
  margin: .5rem 0;
 
  transition: height 0.2s ease; 
`
export const StudentAvatar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	
	background-color: #FFF; 
	width: 4rem;
	height: 4rem;
	margin: 0 auto;
	border-radius: 50%;
` 
export const StudentDescription = styled.div`
	width: 50%; 
`
export const StudentPresence = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: .5rem;
`
export const StudentPresent = styled.button`
	color: green;
	font-size: .8rem;
	font-weight: bold; 

	cursor: pointer;
`
export const StudentAbsent = styled.button`
	color: red;
	font-size: .8rem;
	font-weight: bold;

	cursor: pointer;
`
export const StudentName = styled.div` 
	color: #FFF;
	font-size: 1rem;
	font-weight: bold;
	text-align: center; 
`
export const StudentStar = styled.div`
	color: yellow;
	width: 25%;
	font-size: 1rem;
	font-weight: bold;
	text-align: center;
`