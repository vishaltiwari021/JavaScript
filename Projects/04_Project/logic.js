let number = parseInt(Math.random()*100+1);

const submit  = document.getElementById('subt')
const userInput = document.querySelector('#guessField')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')
const guessSlot = document.querySelector('.guesses')
const remaning = document.querySelector('.lastResult')
  
const p = document.createElement('p')
 let prevGuess = [];
 let numGuess =1;

 let playGame  =true;

 if(playGame){
    submit.addEventListener('click', function (e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
 }

 function validateGuess(guess){
    //guess the value is b/w  1 to 100
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess<1){
         alert('Please enter a number more than 1')
    }else if(guess>100){
         alert('Please enter a number less than 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was${number}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

 }

 function checkGuess(guess){
    //
    if(guess===number){
        displayMessage(`You guessed it right`)
        endGame()
    }else if(guess<numGuess){
        displayMessage(`Number is tooo low`)
    }
    else if(guess>numGuess){
        displayMessage(`Number is tooo high`)
    }
 }
 

 function displayGuess(guess){
    //
    userInput.value ='';
    guessSlot.innerHTML += ` ${guess}, `;
    numGuess++;
    remaning.innerHTML = `${11-numGuess}`
 }

 function displayMessage(message){
    //
    lowOrHi.innerHTML = `<h3>${message}</h3>`
 }

 function newGame(){
    //
    const reStartGame = document.querySelector('#newGame');
    reStartGame.addEventListener('click',function(e){
        number = parseInt(Math.random()*100+1);
        prevGuess =[];
        numGuess = 1;
        guessSlot.innerHTML ='';
        remaning.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        
        playGame = true;

    })

 }

 function endGame(){
    //
    userInput.value ='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame"> Start new game</h2>`;
    startOver.appendChild(p);
    playGame =false;
    newGame();
 }