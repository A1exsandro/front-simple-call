import React, { useState } from "react"

import { getStorage } from "../../services/Firebase"
import { ref, getDownloadURL } from "firebase/storage" 
import { uploadBytes } from 'firebase/storage'

function Upload() {
  const [imgFirebase, setImgFirebase] = useState()
  const [file, setFile] = useState()

  // Create a reference to the file we want to download
  const storage = getStorage();
  const starsRef = ref(storage, 'first.jpg')

  // Crie uma referência ao seu arquivo de 
  const firstRef = ref(storage, 'images/second.jpg')
  // const firstImagesRef = ref(storage, 'images/first.jpg')

  function handleFileChange(e) {
    const file = e.target.files[0]
    setFile(file)
    console.log('Arquivo selecionado:', file)
  }

  const fileLocal = '/home/desktop/Pictures/icons'

  uploadBytes(firstRef, file).then((snapshot) => {
    console.log('Uploaded a blob or file!')
  });

  // Get the download URL
getDownloadURL(starsRef)
.then((url) => {
  // Insert url into an <img> tag to "download"
  setImgFirebase(url)
  console.log(url)
})
.catch((error) => {
  // A full list of error codes is available at
  // https://firebase.google.com/docs/storage/web/handle-errors
  switch (error.code) {
    case 'storage/object-not-found':
      // File doesn't exist
      break
    case 'storage/unauthorized':
      // User doesn't have permission to access the object
      break
    case 'storage/canceled':
      // User canceled the upload
      break

    // ...

    case 'storage/unknown':
      // Unknown error occurred, inspect the server response
      break
  }
})

console.log('outside', imgFirebase)


  return (
    <input type="file" accept="image/*" onChange={handleFileChange} />
  )
}