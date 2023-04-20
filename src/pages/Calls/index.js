import { useEffect, useState } from 'react'
import axios from 'axios' 

import firebase from 'firebase/app';
import { ref } from'firebase/storage';
import { database, getStorage } from '../../services/Firebase'
import { child } from "firebase/database" 

import {  
  CallsContainer,
  CallsTitle,
  CallDaily,
  CallDate,
  CallStudents,
  CallName,
  CallPresent
} from './styles'
import { uploadBytes } from 'firebase/storage';

const baseURL = process.env.REACT_APP_BASE_URL  
 
function Calls() { 
  const [calls, setCalls] = useState([])
  const [file, setFile] = useState()

  // Crie uma referência ao seu arquivo de 
  const storage = getStorage()
  const firstRef = ref(storage, 'first1.jpg')
  // const firstImagesRef = ref(storage, 'images/first.jpg')

  function handleFileChange(e) {
    const file = e.target.files[0];
    setFile(file)
    console.log('Arquivo selecionado:', file);
  }

  const fileLocal = '/home/desktop/Pictures/icons'

  uploadBytes(firstRef, file).then((snapshot) => {
    console.log('Uploaded a blob or file!');
  });
///////////////////////////////////////////////////////////////////////

  useEffect(() => {
    axios.get(`${baseURL}/calls`).then((response) => {
      setCalls(response.data) 
    })
  },[]) 
 
  return(
    <CallsContainer>
      <CallsTitle>Calls</CallsTitle>
      {
        calls.map((call, index) => ( 
          <CallDaily key={index}>
            <CallDate>{ new Date(call.date).toDateString() }</CallDate>
            {
                call.students.map((student, index) => (
                <CallStudents key={index}> 
                  <CallName>{student.name}</CallName>
                  <CallPresent>{student.present.toString()}</CallPresent>
                </CallStudents>
              ))
            } 
          </CallDaily>
        ))
      }   

      <input type="file" accept="image/*" onChange={handleFileChange} />
    </CallsContainer>
     
  )
}

export default Calls 