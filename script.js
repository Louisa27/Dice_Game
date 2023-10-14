//Task 3: Declare variable
//Task 4: Change images/diceYOUR_NUMBER.png
//Task 5: Change line 9 & 10 
                                                         
var randomNumber1 = Math.floor(Math.random() * 6) + 1  
console.log(randomNumber1);

var randomNumber = Math.floor(Math.random() * 6) + 1
console.log(randomNumber);


document.querySelectorAll("img")[0].setAttribute('src','images/dice' + randomNumber1 + '.png')
document.querySelectorAll("img")[1].setAttribute('src','images/dice' + randomNumber + '.png')

if (randomNumber1 > randomNumber) {
    document.querySelector('h1').innerHTML = '⛳️ Player 1 Wins!'
} else if (randomNumber1 < randomNumber) {
    document.querySelector('h1').innerHTML = '⛳️ Player 2 Wins!'
} else { 
    document.querySelector('h1').innerHTML = '⛳️ Луиза wins!'
}
