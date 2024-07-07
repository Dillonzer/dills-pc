import React from 'react';
import './App.css';
import DecklistCreator from './pokemon/DecklistCreator'
import { Card } from './pokemon/Models';

let card : Card = { name: "test", set: "test", number: "", imageLink: "https://pkmn-tcg-api-images.sfo2.cdn.digitaloceanspaces.com/Brilliant%20Stars/en_US/arceus%20v%20166.png", deckCount: 4};
let cardArray : Card[] = []
cardArray.push(card);

function App() {
  return (
    <div>
      <DecklistCreator cards={cardArray}/>
    </div>
  );
}

export default App;
