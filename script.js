$(document).ready(function(){
  let z = 1;

  $("button").on('click', function() {
    z++;
    alert(z);
  });


$("button").off("click");
});

// let a = 1;
// console.log(window.a === 1);

// let outerVar = 1;

// function inner() {
//   let a = 2;
//   console.log(a);
//   console.log(window.a)
// }

// inner();
// console.log(a);

// let a = 1;
// let b = 2;

// function inner() {
//   a = 4;
//   let b = 3;
// }

// inner();
// console.log(a);
// console.log(b);


// let declaredLater;

// declaredLater = 2;
// console.log(declaredLater);

// let name = "Fer";

// function changeName() {
//   console.log("original name was " + name);
  
//   // let name = "Harry";
//   // fxn doesn't work unless harry line is commented out, because the two names overlap in terms of what the function sees through scope.
//   console.log("new name is " + name);
// }

// changeName();

// let a = 1;

// function foo() {
//   let a = 2;
//   console.log(a);
// }

// function bar() {
//   a = 3;
//   console.log(a);
// }

// foo();
// bar();
// console.log(a);

// // function declaration and scope and closures need to be at end of first week or worst case beginning of 2nd week. it helped me understand functions a lot.

// isItHoisted();

// function isItHoisted() {
//   console.log("yes");
// }
// // functions can be called even prior to them being defined as shown above.

// // you can only call a function prior (above it in code) if it is a function statement (i.e. function fxn name), not with a fxn expression - let fxnname = function().

// // Immediately Invoked Function expressions
// (function() {
// console.log("hello world")
// }());

// (function(a, b) {

// }('hello', 'world'));

let a = 1;

console.log(this);
console.log(this === window);

console.log(window.a);
console.log(this.a);
console.log(a);

function foo(){
  console.log(this);
}
foo();

function doStuff (a, b) {
  console.log(arguments);
}
doStuff('hi', 2, 3+5);