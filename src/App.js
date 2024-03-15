/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Card from "./Card";

const Cards = [
  { point: "A", color: 'Spade' },
  { point: "2", color: 'Spade' },
  { point: "3", color: 'Spade' },
  { point: "4", color: 'Spade' },
  { point: "5", color: 'Spade' },
  { point: "6", color: 'Spade' },
  { point: "7", color: 'Spade' },
  { point: "8", color: 'Spade' },
  { point: "9", color: 'Spade' },
  { point: "10", color: 'Spade' },
  { point: "J", color: 'Spade' },
  { point: "Q", color: 'Spade' },
  { point: "K", color: 'Spade' },
  
  { point: "A", color: 'Heart' },
  { point: "2", color: 'Heart' },
  { point: "3", color: 'Heart' },
  { point: "4", color: 'Heart' },
  { point: "5", color: 'Heart' },
  { point: "6", color: 'Heart' },
  { point: "7", color: 'Heart' },
  { point: "8", color: 'Heart' },
  { point: "9", color: 'Heart' },
  { point: "10", color: 'Heart' },
  { point: "J", color: 'Heart' },
  { point: "Q", color: 'Heart' },
  { point: "K", color: 'Heart' },

  { point: "A", color: 'Club' },
  { point: "2", color: 'Club' },
  { point: "3", color: 'Club' },
  { point: "4", color: 'Club' },
  { point: "5", color: 'Club' },
  { point: "6", color: 'Club' },
  { point: "7", color: 'Club' },
  { point: "8", color: 'Club' },
  { point: "9", color: 'Club' },
  { point: "10", color: 'Club' },
  { point: "J", color: 'Club' },
  { point: "Q", color: 'Club' },
  { point: "K", color: 'Club' },

  { point: "A", color: 'Diamond' },
  { point: "2", color: 'Diamond' },
  { point: "3", color: 'Diamond' },
  { point: "4", color: 'Diamond' },
  { point: "5", color: 'Diamond' },
  { point: "6", color: 'Diamond' },
  { point: "7", color: 'Diamond' },
  { point: "8", color: 'Diamond' },
  { point: "9", color: 'Diamond' },
  { point: "10", color: 'Diamond' },
  { point: "J", color: 'Diamond' },
  { point: "Q", color: 'Diamond' },
  { point: "K", color: 'Diamond' },
];

function shuffleShoe(shoe) {
  const shoeCopy = [...shoe];

  for (let i = shoeCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shoeCopy[i], shoeCopy[j]] = [shoeCopy[j], shoeCopy[i]]; // 交换元素
  }
  return shoeCopy;
}

export default function App(){
  const [shoe, setShoe] = useState(Cards);

  const handleShuffleClick = () => {
    const shuffledCards = shuffleShoe(shoe);
    setShoe(shuffledCards);
  };

  return <>
    <button onClick={handleShuffleClick}>Shuffle Cards</button>
    {shoe.map((card, index) => (
      <Card key={index} point={card.point} color={card.color} ></Card>
    ))}
  </>
}