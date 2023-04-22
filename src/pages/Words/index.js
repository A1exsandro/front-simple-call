import React, { useState } from "react"
import CardList from "../../components/CardList"
import { MemoryContextProvider } from "../../contexts/MemoryContext"

const Words = () => {
  const cards = [
    { id: 1, front: "Front of card 1", back: "Flower", srcImg: "https://i.pinimg.com/564x/b0/9c/59/b09c5949c915e86c2e6332ca34d328f2.jpg" },
    { id: 2, front: "Front of card 2", back: "Car", srcImg: "https://i.pinimg.com/564x/ad/ea/a1/adeaa1d253aa4b4f103f88aec77bb0eb.jpg" },
    { id: 3, front: "Front of card 3", back: "Plane", srcImg: "https://i.pinimg.com/564x/e0/d1/0a/e0d10a8019fe10fa60923c0aa8c89370.jpg" },
    { id: 4, front: "Front of card 1", back: "Fire", srcImg: "https://i.pinimg.com/564x/1d/46/c7/1d46c7a1de8e1f87cee42941b06b87b1.jpg" },
    { id: 5, front: "Front of card 2", back: "Water", srcImg: "https://i.pinimg.com/236x/46/92/7b/46927bdbc4bbb11a7b5ab32d846525f9.jpg" },
    { id: 1, front: "Front of card 1", back: "Flower", srcImg: "https://i.pinimg.com/564x/b0/9c/59/b09c5949c915e86c2e6332ca34d328f2.jpg" },
    { id: 2, front: "Front of card 2", back: "Car", srcImg: "https://i.pinimg.com/564x/ad/ea/a1/adeaa1d253aa4b4f103f88aec77bb0eb.jpg" },
    { id: 3, front: "Front of card 3", back: "Plane", srcImg: "https://i.pinimg.com/564x/e0/d1/0a/e0d10a8019fe10fa60923c0aa8c89370.jpg" },
    { id: 4, front: "Front of card 1", back: "Fire", srcImg: "https://i.pinimg.com/564x/1d/46/c7/1d46c7a1de8e1f87cee42941b06b87b1.jpg" },
    { id: 5, front: "Front of card 2", back: "Water", srcImg: "https://i.pinimg.com/236x/46/92/7b/46927bdbc4bbb11a7b5ab32d846525f9.jpg" },
  ]
 
  return (
    <MemoryContextProvider>
      <CardList />
    </MemoryContextProvider>
  )
}

export default Words