//1.
//Parameters are the names passed in a function and arguments are the actual values.

//2.
//Return actually returns a value when console.log prints it in the console for debugging or checking work.

/*********************************************************************/

// function palindrome(str) {
//  let splitted = str.split("");
//  let reversed = splitted.reverse("");
//  let joined = reversed.join("");
//  return joined.toLowerCase().replace(/[^0-9a-z]/gi, '') == str.toLowerCase().replace(/[^0-9a-z]/gi, '')
// }
//
// console.log(palindrome('Racecar'))
//I HAD TO SEARCH FOR HELP ON THIS ONE

/***********************************************************************/

// function sumArray(arr){
//   let sum = 0;
//   for(let i=0; i < arr.length; i++){
//     sum += arr[i];
//   }
//   console.log(sum)
// }
//
// sumArray([1,2,3])

/********************************************************************** */

// function checkPrime(num) {
//
//   if (num === 2) {
//     return true;
//   } else if (num > 1) {
//     for (var i = 2; i < num; i++) {
//
//       if (num % i !== 0) {
//         return true;
//       } else if (num === i * i) {
//         return false
//       } else {
//         return false;
//       }
//     }
//   } else {
//     return false;
//   }
//
// }
//
// console.log(checkPrime(17));

/******************************************************************************* */

// function printPrimes() {
//   for (let i=0; i<100; i++){
//     if(checkPrime(i) === true){
//       console.log(i)
//     }
//   }
// }
//
// printPrimes()

/******************************************************************************/

// const randomMove = () => {
//   const randomNumber = (Math.floor(Math.random() * 3))
//   if (randomNumber === 0){
//     return 'Rock';
//   }
//   else if (randomNumber === 1){
//     return 'Paper';
//   }
//   else if (randomNumber === 2){
//   return 'Scissors';
//   }
//     }
// console.log(randomMove());
// let computersMove = randomMove();
// // console.log(computersMove);
// let usersMove = randomMove();
// // console.log(usersMove);
// const rockPaperScissors = (computersMove,usersMove) => {
//   if (usersMove === computersMove){
//     return 'The game is a tie!';
//   }
//   else if (usersMove === 'Rock'){
//     if (computersMove === 'Paper'){
//       return 'The computer wins!';
//     }
//     else {
//       return 'You won!';
//     }
//   }
//   else if (usersMove === 'Paper'){
//     if (computersMove === 'Scissor'){
//       return 'The computer wins!';
//     }
//     else {
//       return 'You won!';
//     }
//   }
//   else if (usersMove === 'Scissor') {
//     if (computersMove === 'Rock') {
//       return 'The computer wins!';
//     }
//     else {
//       return 'You won!';
//     }
//   }
// }
// console.log('cmp:'+ computersMove + ' usr:' + usersMove);
// console.log(rockPaperScissors(computersMove, usersMove));
