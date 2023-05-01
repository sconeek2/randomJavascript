(function () {

    document.write("hello from hangman-lite.js");

})();
//get a word from the user
/*let word = prompt("What is your word");


console.log(word);

//create an array of the user word
let wordArray = word.split();
console.log(wordArray);



for (i = 0; i < wordArray.length; i++) {
    //get a letter from the user
    let alpha = prompt("Guess a letter");
    console.log(alpha);

    let filteredWordArray = wordArray.filter(letterCheck)

    function letterCheck(letter){
        return letter == alpha;
    }

    console.log(filteredWordArray);
}

//display the word as a sereies of blanks

//search through word looking for a letter*/

//handman word
let word = prompt("enter a word");
console.log('hangman word: ' + word);



//empty array
let wordArray = [];

//control for loop
let guess = true;

//letter to match
let letter = prompt("Guess a letter");
console.log('user letter: ' + letter);



for (i = 0; i < word.length; i++) {
    if (word[i] === letter) {
        wordArray.push(i);
        console.log("Yeah, the letter "+letter+" exists "+wordArray.length+" times in my word");
        i++;
    } else {
        console.log("Nope, that letter doesn't exist in my word.");
    }
}


