

//Verify if the HTML is loaded to get the ids
document.addEventListener("DOMContentLoaded", function(){

//Declare the variables and get the ids
    const button = document.getElementById("sendButton");
    const attempts = document.getElementById("attempts");
    const guesses = document.getElementById("guesses");
    const newGame = document.getElementById("newGameButton");
    let counter = 0;
    let guess;
    let list = []


//Check if the random number is higher, lower or correct    
function validNumber(){
    if(guess > number){
        return alert("The Number Is Lower");
        
    }else if(guess < number){
        return alert("The Number Is Higher");
            
    }else if(guess == number){
        return alert("Congratulations You Win!");
}
        
}



//Generate a random number between 1 and 100, and set it as the target number
function randomNumber(){
        return Math.floor(Math.random() * 100);
}

//Show the number in console for testing purposes
    const number = randomNumber();

    console.log("The random number is " + number);
    console.log(guess);


//Check if the "send" button was clicked to run the function    
button.addEventListener('click', function(){
    
//Get the value to show in guesses list
    guess = inputBox.value.trim();
    list.push(guess);

    guesses.textContent = list;

//Count the attemps
    counter += 1;
    attempts.textContent = counter;

//Call the valid number function to show the alert when send is clicked    
    validNumber();

})


//Check if the key "Enter" is pressed to activate the send button
button,addEventListener("keydown", function(){
    if(event.key == 'Enter'){
        button.click();
}
 
})


//Check the "new game" button was clicked to reload the page and reset the game
newGame.addEventListener('click', function(){
    window.location.reload();
})


})