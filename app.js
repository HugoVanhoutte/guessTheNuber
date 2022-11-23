
let guessButton = document.getElementById("guess-button");
let result;
let counter = 10;
let reset = document.getElementById("reset");
let resultShort;

//Fonction Reset game
function resetFunc(){
    counter = 10;
    numberToGuess = numberGenerator();
    document.getElementById("guess-plus-or-minus").innerText = null;
    document.getElementById("nb-tenta").innerText = counter;
    document.getElementById("guess-plus-or-minus").innerText = null;
    document.getElementById("list-tries").innerHTML=" ";
    }

    //Fonction New Try
function newTry(userGuess,counter) {
    counter--;
    let tries = document.createElement("li");
    tries.innerText = userGuess.toString() + " " + resultShort;
    document.getElementById("list-tries").append(tries);
    document.getElementById("user-guess").value = null;
    return counter
}

//Number Generator (1 >= numberToGuess <= 100)
function numberGenerator() {
return (Math.floor(Math.random()*100)+1);
}
let numberToGuess = numberGenerator();

//Event Listener
guessButton.addEventListener('click',function (event){
    event.preventDefault();
    let userGuess = parseInt(document.getElementById("user-guess").value);

    //Vérification (1 >= numberToGuess <= 100)
    if (userGuess < 1 || userGuess > 100) {
    alert("Please Enter a number between 1 and 100 (both included)")

    } else {
    if(userGuess === numberToGuess) {
        result = "Gagné";
        resetFunc();

    } else if (userGuess < numberToGuess) {
        result = "C'est plus";
        resultShort = "+";
        counter = newTry(userGuess,counter);


    } else {
        result = "C'est moins"
        resultShort = "-";
        counter = newTry(userGuess,counter);
    }
    document.getElementById("guess-plus-or-minus").innerText = result;
    }
    document.getElementById("nb-tenta").innerText = counter.toString();


if(counter === 0){
    alert("Perdu, le chiffre a deviner était: " + numberToGuess)
    resetFunc();
} else {

}
})

reset.addEventListener("click", function (event){
    event.preventDefault();
    resetFunc();
})