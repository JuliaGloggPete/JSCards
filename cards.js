


const lowerButton = document.querySelector('#lower')
const higherButton = document.querySelector('#higher')
const equalButton = document.querySelector('#equal')
const showScore = document.querySelector('#score')

const deck = generateDeck();
let activeCard = {};
pickCard();
showCard();
let score = 0;

console.log(deck)


function generateDeck(){
let deck = [];
const suits =['&spades;','&hearts;','&clubs;', '&diams;' ];
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


lowerButton.addEventListener('click', () =>{
    /*spara värdet
    välj lägre lika eller hägre
    slumpa ny kort
    spara kortet */

    const previosCard = activeCard;
    pickCard();
    showCard();

    console.log(previosCard)
    console.log(activeCard)

    if (activeCard.value < previosCard.value){
        score++
        showScore.innerText = 'Your score is ' + score;
        console.log(score)
    } else{
        
    }


})
higherButton.addEventListener('click', () =>{
  

    const previosCard = activeCard;
    pickCard();
    showCard();

    console.log(previosCard)
    console.log(activeCard)

if (activeCard.value > previosCard.value){
    score++;
    showScore.innerHTML = 'Your score is ' + score;
    console.log(score)
} else{

}

})
equalButton.addEventListener('click', () =>{
   

    const previosCard = activeCard;
    pickCard();
    showCard();

    console.log(previosCard)
    console.log(activeCard)

    if (activeCard.value ===  previosCard.value){
        let score = score++
        showScore.innerText = 'Your score is ' + score;
        console.log(score)

    } else{
        
    }


})