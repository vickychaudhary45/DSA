// function restPara(a, ...rest) {
//   return {
//     a,
//     ...rest,
//   };
// }

// console.log(restPara(2, [1, 2]));

function restPara(a, ...rest) {
  return rest;
}

console.log(restPara(2, 1, 2));

// what will be the output of this?

// can we pass pass the rest parameter only in functions params?

// can you tell me about call back functions?

// can you tell me about different scopes available in JS?

// can you write a variable? Take a scope

var x = 100;
{
  var x = 500; 
}
let a = x;
{
  let a = 1000;
}

console.log(a);// var is function scope but still output is 500 why?

// what are different loop methods in JS?
// what is the difference between map and event loop?
// what is the difference between map and for each method?
