


document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("sendButton");
    const attempts = document.getElementById("attempts");
    const guesses = document.getElementById("guesses");
    const newGame = document.getElementById("newGameButton");
    let contador = 0;
    let guess;
    let list = []
    
function validNumber(){
    if (guess > numero) {
        return alert("The Number Is Lower");
        
    }else if (guess < numero){
        return alert("The Number Is Higher");
            
    }else if(guess == numero){
        return alert("Congratulations You Win!");
    }
        
}

function randomNumber() {
        return Math.floor(Math.random() * 100);
    }

    const numero = randomNumber();

    console.log("O numero aleatorio é " + numero);
    console.log(guess);

button.addEventListener('click', function(){
    

    guess = inputBox.value.trim();
    list.push(guess);

    guesses.textContent = list;


    contador += 1;
    attempts.textContent = contador;

    validNumber();

})
button,addEventListener("keydown", function(){
    if(event.key == 'Enter'){
        button.click();
    }
 
})

newGame.addEventListener('click', function(){
    window.location.reload();
})


})