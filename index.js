


document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("sendButton");
    const attempts = document.getElementById("attempts");
    const guesses = document.getElementById("guesses");
    let contador = 0;
    

    function randomNumber() {
        return Math.floor(Math.random() * 100);
    }

    const numero = randomNumber();

    console.log(numero);
button.addEventListener('click', function(){

    let list = []
    let guess = inputBox.value.trim();
    list.push(guess)
    guesses.textContent = list


    contador += 1;
    attempts.textContent = contador;
})



})
