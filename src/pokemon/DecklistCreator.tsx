import React from "react";
import "./DecklistCreator.css"
import { Deck } from "./Models";

export default function CreateDecklistTable({cards} : Deck)
{
    let fullList = cards;
    let cardList = []
    for(let i = 0; i < fullList.length; i++)
    {
        let card = fullList[i]
        let cardImage = <img className="card" src={card.imageLink} alt={card.name}></img>
        let cardAmountSpan = <span className="decklistAmount">{card.deckCount}</span>
        //cardImage.onclick = function () {SetPrizeCards(card, cardAmountSpan)}
        cardList.push(<div>{cardImage}{cardAmountSpan}</div>)
    }

    return (
        <div id="deckTable">
            {cardList}
        </div>
    )
}
