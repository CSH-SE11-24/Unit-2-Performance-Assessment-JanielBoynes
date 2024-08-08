const { getRandomValues } = require('crypto')

const prompt = require('prompt-sync')()
let player = {
  name: prompt("what is your name"),
  skillLevel: 0
}
let hands = ["rock", "paper", "scizzors"]
let user = prompt("welcome to rock paper sizzors,enter rock paper or scizzors: ").toLowerCase()

let attempts = 0
function displayPlayer(){
  console.log("Hey you have ",player.skillLevel)
}
function game() {
  while (attempts <= 2) {
    if (user === hands[0]) {
      console.log("computer chose", hands[0], " and you chose rock,it was a tie")
      attempts++
    } else if (user === hands[1]) {
      console.log("computer chose", hands[2], "and you chose paper,the computer has won!")
      attempts++
    }
    
    if (user === hands[2]) {
      console.log("computer chose", hands[1], "and you chose scizzors,the computer has lost!!")
      player.skillLevel++
      attempts
    }
      user = prompt("enter rock paper or scizzors: ").toLowerCase()
    
  }
}

game()

for(let i=0;i<3;i++){
  console.log(hands[i])
}

(displayPlayer) 