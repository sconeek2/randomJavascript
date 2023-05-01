/*//remove duplicates
let words = "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta";

function removeDuplicateWords(s) {
  let wordsArray = s.split(" ");//turning the string into an array
  let otherArray = [];

  for (i = 0; i < wordsArray.length; i++) {
    if (!otherArray.includes(wordsArray[i])) {
      otherArray.push(wordsArray[i]);
    }
  }

  let string = otherArray.join(" ");
  return string;
}

removeDuplicateWords(words)*/

/*//complete the pattern
let runCount = 9; //how many times will the pattern run

function pattern(n) {
  var output = "";
  let char = "";

  for (i = 1; i <= n; i++) {
    char = String(i);
    output = char.repeat(i);
    console.log(output);
  }
}
pattern(runCount)*/

/*/If you can't sleep, count sheep

var countSheep = function (num) {
  let repeatString = "";
  for (i = 1; i <= num; i++) {
    repeatString += i + " sheep...";
  }
  console.log(repeatString);
}

countSheep(3);*/

/*/people, people, people
class Person {
  constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male"){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  sayFullName(){
    console.log('${this.firstName} + ${this.lastName}')
  }

  static greetExtraTerrestrials(raceName) {
    console.log (`Welcome to Planet Earth ${raceName}`);
  }
}*/

