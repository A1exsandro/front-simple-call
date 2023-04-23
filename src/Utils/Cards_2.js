import { getStorage } from '../services/Firebase'
import { ref, getDownloadURL } from "firebase/storage" 

const storage = getStorage() 

const data = [
  'butterfly',
  'avocado',
  'banana',
  'bathroom',
  'breakfast',
  'closed',
  'dance',
  'eat',
  'fear'
] 
console.log('here in cards')

export const promises = data.map((dt) => (
  getDownloadURL(ref(storage, `images/${dt}.jpeg`))
))

export const audioPromises = data.map((dt) => (
  getDownloadURL(ref(storage, `audio/${dt}.mp3`))
))
