import styled from 'styled-components'
 
export const StudentContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

  width: 100%;
  max-width: 400px; 
  background: #000;
  border-radius: 4px;
  padding: 1rem;
  
	

  transition: height 0.2s ease; 
`
export const StudentAvatar = styled.div`
	background-color: #FFF;
	padding: 1rem;
	border-radius: 50%;
` 
export const StudentDescription = styled.div`
	/* background-color: aqua; */
`
export const StudentPresence = styled.div`
	display: flex;
	justify-content: space-between;
`
export const StudentPresent = styled.div`
	color: green;
	font-size: 1rem;
	font-weight: bold;

	cursor: pointer;
`
export const StudentAbsent = styled.div`
	color: red;
	font-size: 1rem;
	font-weight: bold;

	cursor: pointer;
`
export const StudentName = styled.div` 
	color: #FFF;
	font-size: 2rem;
	font-weight: bold;
	padding: 0 1rem;
`
export const StudentStar = styled.div`
	color: yellow;
	font-size: 1rem;
	font-weight: bold;
`