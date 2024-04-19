let player ={
    name: "Per", 
    chips: 200
    sayHello: function() {
        console.log("Heisann!")
    }
}
 player.sayHello()
 
let cards = []
let sum = []
let hasBlackJack = false
let isAlive = false
let message =""
let messageEL = document.getElementById("message-el")
let sumEl = document.querySelector(".sum-el")
let messageEL = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")


let playerEl = document.getElementById("player-El")
playerEl.textContent = player.name + ": $" + player.chips

console.log()

function getRandomCard {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}
function startGame() {
    isAlive = true
    let firstcard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame() {

    cardsEl.textContent ="Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards [i]
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        message = "Do you want to draw a new card? 😀"
    } else if (sum === 21) {S
        message = "Yay! You,ve got BlackJack! 🎉"
    } else if (sum > 21) {
        hasBlackJack = true
        message = "You're out of the game! 😭"
        isAlive = false
    }
     messageEL.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === falseS) {
        
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()


    }
    
}




