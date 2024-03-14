// // const userName = prompt("Enter Your Name")
// const myName = ["Saqib", "Ubaid", "Uzaima", "Tehseen", "Nihal", "Pubg"]
// // alert(myName);
// const randomNumber = Math.random() * 5;
// const indexNumber = Math.floor(randomNumber);
// console.log(myName[indexNumber]);

// var randomNumber = Math.random();
// var dice = randomNumber * 6;
// var roundedDice = Math.floor(dice) + 1;
// console.log(roundedDice, "===random Number===");
// var randomNumber = Math.random();
// var rangedNumber = randomNumber * 6;
// var newRangedNumber = Math.floor(rangedNumber);
// var diceNumber = newRangedNumber + 1;
// var winnerNumber = 6;
// if (diceNumber === winnerNumber) {
//   alert("You Won");
// } else {
//   alert("Try Again");
// }

// let newUserName = prompt("Enter Your Name")
// let yourAge = prompt("Enter Your Age")
// console.log(newUserName, yourAge)

// first point done

// var newName = ["S", "U", "P", "E", "R", "M", "A", "N"];
// for (var i = newName.length - 1; i >= 0; i--) {
//     console.log(newName[i]);
// }
//  

// second point done

// let userName = prompt("Enter")
// let newNumber = Number(userName)
// // alert(typeof userName, typeof newNumber);
// if(){
//     alert(typeof userName)
// }
// 


// First 
let firstName = "SUPERMAN";
let reverseName = firstName.split("").reverse().join("");
console.log(reverseName);
// 

// Second
let caseType = "HELLO";
let newCase = caseType.toLowerCase() === caseType.toLowerCase().split('').reverse().join('');
console.log(newCase);
// 

// Third
let userInput = prompt("Enter Anything");
if (!isNaN(userInput)) {
  alert("number");
} else {
  alert(typeof userInput);
}
// 

// Fourth
const isConsistent = (arr) => {
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] - arr[i - 1] !== arr[i + 1] - arr[i]) {
      return false;
    }
  }
  return true;
};

const exampleArray = [1, 2, 3, 5, 6, 7];
console.log(isConsistent(exampleArray));
// 