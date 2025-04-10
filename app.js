let print = console.log;
let n = Number(prompt("Enter a largest number"));
const random = Math.floor(Math.random() * n) + 1;
let guess = prompt("Guess the number");

while (true) {
    if (guess === "quit") {
        print("Quitting...");
        break;
    }

    if (guess == random) {
        print("You guessed it right! The random number was", random);
        break;
    } else if (guess < random) {
        guess = prompt("Hint : Your guess was too small. Try again!!");
    } else {
        guess = prompt("Hint : Your guess was too large. Try again!!");
    }
}
let correct;
if(random == guess){
    correct = true;
}