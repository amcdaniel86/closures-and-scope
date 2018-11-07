// $(document).ready(function(){
//   let z = 1;

//   $("button").on('click', function() {
//     z++;
//     alert(z);
//   });


// $("button").off("click");
// });

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

// let a = 1;

// console.log(this);
// console.log(this === window);

// console.log(window.a);
// console.log(this.a);
// console.log(a);

// function foo(){
//   console.log(this);
// }
// foo();

// function doStuff (a, b) {
//   console.log(arguments);
//   // consollog arguments - shows them in detail in the console. very cool
// }
// doStuff('hi', 2, 3+5);

// let obj = {
//   value: 0,
//   increment: function() { this.value++; }
// };

// obj.increment();

//javascript will set the <this> parameter to the object where the method function was invoked on.

// let value = 500;
// let obj = {
//   value: 0;
//   increment: function() {
//     this.value++;

//     let innerFunction = function() {
//       console.log(this.value);
//     }
//     innerFunction();
//     //innerFunction() this is set to the global object.
//   }
// }
// obj.increment();

// let value = 500;
// let obj = {
//   value: 0,
//   increment: function() {
//     let that = this;
//     that.value++;

//     let innerFunction = function() {
//       console.log(that.value);
//     }
//     innerFunction();
//   }
// }
// obj.increment();

// let Cheese = function(typeOfCheese) {
//   let cheeseType = typeOfCheese;
//   console.log(cheeseType);
//   return cheeseType;
// }
// cheddar = new Cheese("gouda");

// let obj = {
//   foo: function(a, b, c,) {
//     console.log( arguments );
//     console.log( this );
//   }
// };

// obj.foo(1,2,3);

// obj.foo.apply(window, [1,2,3]);

// let fer = {name: 'Fer', coder: true};
// let harry = {name: 'Harry', coder: true};

// let hi = function(){
//   console.log('whatsup, ' + this.name);
// };

// let bye = function(){
//   console.log('laters, ' + this.name);
// };

// hi();
// hi.call(fer);
// bye.call(harry);

// let fer   = {name: 'Fer',   coder: true, nationality: 'Mexican'};
// let harry = {name: 'Harry', coder: true, nationality: 'Taiwanese'};

// let update = function(name, coder, nationality){
//   this.name = name;
//   this.coder = coder;
//   this.nationality = nationality;
// };

// update.call(fer, 'Fer', true, 'Spanish');
// // .call with the argument list for 2nd parameter
// update.apply(harry, ['Harry', true, 'Canadian']);
// // .apply with the array list for 2nd parameter

var addGrades_CALL = function(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10) {
  console.log(arguments);
  var sum = 0;
  for (var i=0; i < arguments.length; i++) {
      sum += arguments[i];
  }
  return sum;
}

addGrades_CALL.call(null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

var grades1 = [1,2,3,4,5];
var grades2 = [1,2,3,4,5,6,7,8,9,10];

var addGrades_APPLY = function() {
    console.log(arguments);
    var sum = 0;
    for (var i=0; i < arguments[1].length; i++) {
        sum += arguments[1][i];
    }
    return sum;
}

addGrades_APPLY(null, grades1);
addGrades_APPLY(null, grades2);