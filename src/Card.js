// import { useState } from 'react';
import "./Card.css"
import spadeIcon from "./assets/spade.png"
import heartIcon from "./assets/heart.png"
import clubIcon from "./assets/club.png"
import diamondIcon from "./assets/diamond.png"

function Card({point, color}) {
    const suitImages = {
        "Spade": spadeIcon,
        "Heart": heartIcon,
        "Club": clubIcon,
        "Diamond": diamondIcon,
    };
    const textColorClass = color === 'Heart' || color === 'Diamond' ? 
        'text-red' : 'text-black';
    const imagePath = suitImages[color];

    return <div className="card">
        <div className={`card-corner top-left ${textColorClass}`}>
            <div className="number">{point}</div>
        </div>
        <div className="card-middle">
            <img src={imagePath} alt="Suit" />
        </div>
        <div className={`card-corner bottom-right ${textColorClass}`}>
            <div className="number">{point}</div>
        </div>
    </div>
}

export default Card