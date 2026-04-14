// Write a program that takes a character as input and prints 1, 0, or -1 according to the following rules.

// 1, if the character is an uppercase alphabet (A - Z).
// 0, if the character is a lowercase alphabet (a - z).
// -1, if the character is not an alphabet.


const readline = require('readline');

// An interface to take input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Type something: ', function (alphabet) {
  rl.close();

  console.log(typeof alphabet);
  if(typeof alphabet === 'string') {
    if(alphabet > 'A' && alphabet < 'Z'){
        console.log(1);
    }else if(alphabet > 'a' && alphabet < 'z') {
        console.log(0);
    }else {
        console.log(-1);
    }
  } else {
    console.log(-1);
  }
});





// The readline module in Node.js reads the input as a string, regardless of whether the input is a number or any other type. 
// When you use rl.question, it treats the input as a string, and that's why typeof alphabet is showing 'string'.

