const deck = generateDeck();
let activeCard = {};
pickCard();
showCard();

console.log(deck)


function generateDeck(){
let deck = [];
const suits =['&spades;','&hearts;','&clubs;', '&daims;'];
for(let i =0; i < suits.length; i++){
for(let j = 2; j < 15; j++){
let card ={
suit: suits[i],
color: getColor(suits[i]),
display:getDisplay(j),
value:j

}
deck.push(card);

}

}

function getColor(suit){
    if (suit === '&hearts;' || suit === '&daims;'){
        return 'red';

    } else {
        return 'black';
    }
}
function getDisplay(value){
    if(value < 11){ return value;}
    else if (value === 11){ return 'J'}
    else if (value === 12){ return 'D'}
    else if (value === 13){ return 'K'}
    else if (value === 14){ return 'A'}
}
return deck

}

function pickCard(){
const randomPosition = Math.floor(Math.random()* deck.length)
const pickedCard = deck.splice(randomPosition,1);

console.log(pickedCard)
activeCard = pickedCard[0];

}

function showCard(){

    const cardHolderElem = document.querySelector('#show-card');
    cardHolderElem.innerHTML = `
    <section class= "front">
    <header> <span class ="${activeCard.color}"> ${activeCard.suit} 
    </span> ${activeCard.display} </header>
    <div class = "suit ${activeCard.color}> ${activeCard.suit}</div>
    <footer><span class ="${activeCard.color}"> ${activeCard.suit} 
    </span> ${activeCard.display}
    </footer>
    </section>
`
    


}