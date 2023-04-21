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
    { id: 6, front: "Front of card 3", back: "Train", srcImg: "https://i.pinimg.com/564x/95/a7/39/95a73939063b3ccf68e81074e2251e29.jpg" },
    { id: 7, front: "Front of card 1", back: "Ball", srcImg: "https://i.pinimg.com/564x/29/6e/13/296e13843ffcbb9db896beb90d74ab53.jpg" },
    { id: 8, front: "Front of card 2", back: "Pants", srcImg: "https://i.pinimg.com/564x/04/d7/57/04d7578f760a3bd5fe69411d1d467f53.jpg" },
    { id: 9, front: "Front of card 3", back: "T-shirt", srcImg: "https://i.pinimg.com/564x/ee/66/14/ee6614511af03c4489aec0eee1d8c5b0.jpg" },
    { id: 10, front: "Front of card 1", back: "Door", srcImg: "https://i.pinimg.com/564x/d3/4a/a5/d34aa51daf897ed9f278eae804d9f1ca.jpg" },
    { id: 11, front: "Front of card 2", back: "Windows", srcImg: "https://i.pinimg.com/564x/4e/ba/4c/4eba4c50d19fa2adbb2d3eb4c894d061.jpg" },
    { id: 12, front: "Front of card 3", back: "Desk", srcImg: "https://i.pinimg.com/564x/71/48/db/7148db3b2874b03ec03a4151a8fae15a.jpg" },
    { id: 13, front: "Front of card 1", back: "Glass", srcImg: "https://i.pinimg.com/564x/8b/06/51/8b0651208341601c05a6be6653414eed.jpg" },
    { id: 14, front: "Front of card 2", back: "Box", srcImg: "https://i.pinimg.com/564x/bf/2c/03/bf2c031274b9045d8cb27490999da7a5.jpg" },
    { id: 15, front: "Front of card 3", back: "Fitgh", srcImg: "https://i.pinimg.com/564x/8a/15/29/8a1529af1a5d69d7b6092906d8b718c6.jpg" },
  ]
 
  return (
    <MemoryContextProvider>
      <CardList cards={cards} />
    </MemoryContextProvider>
  )
}

export default Words