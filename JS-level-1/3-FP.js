
/*

FP principles:
-------------
    - A function can be stored in a variable or value
    - A parameter of a function can be a function
    - The return value of a function can be a function
*/
//--------------------------------------------------------
// imp-note : every function is an object by default
//--------------------------------------------------------

// how to create function in .js-lang ?

// 3 ways

// 1. function-declaration

/*
    => Named function
    => function-obj created at scope-creation phase
    => always get hoist with function-obj.

    when to use ?

    ==> to keep function always around-scope
*/

// 2. function-expression


/*
    => Anonymous function
    => function-obj created at scope-execution phase
    => we can invoke after expression.

    when to use ?

    ==> to create function when required

*/

// 3. arrow-function ( ES6 )

//--------------------------------------------------------

// 1. function-declaration

// console.log(add(12, 13));

// function add(n1, n2) {
//     return n1 + n2;
// }

// console.log(add(12,13));

//--------------------------------------------------------

// 2. function-expression

// console.log(add(12, 13)); // Error
// let add = function (n1, n2) {
//     return n1 + n2;
// }
// // console.log(add(12,13));

//--------------------------------------------------------

// e.g

// let userType = null;
// let userAction;
// function login() {
//     userType = "admin" // | guest
// }
// login();
// if(userType==="admin"){
//     userAction=function(){console.log('admin action...');}
// }
// if(userType==="guest"){
//     userAction=function(){console.log('guest action...');}
// }
// userAction();

//--------------------------------------------------------


// FP principles:
// -------------
//     - A function can be stored in a variable or value
//     - A parameter of a function can be a function
//     - The return value of a function can be a function
// --------------------------------------------------------


// - A function can be stored in a variable or value

// function greet() {
//     console.log('Hello...');
// }
// let sayHello = greet;


//--------------------------------------------------------

//     - A parameter of a function can be a function

// function greet(f) {
//     if (f) {
//         f(); return;
//     }
//     console.log('Hello...');
// }
// greet();
// greet(function () { console.log('Namaskara') });


// let nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// nums.sort(); // compares elements as string
// console.log(nums);
// let asc = function (a, b) { return a - b; };
// nums.sort(asc);  // compares elements as numbers in asc order
// console.log(nums);
// let desc = function (a, b) { return b - a; };
// nums.sort(desc);// compares elements as numbers in desc order
// console.log(nums);

//--------------------------------------------------------

//     - The return value of a function can be a function


// function teach() {
//     console.log('teaching...');
//     let learnFunc = function () {
//         console.log('Learning..');
//     }
//     //learnFunc();
//     console.log('teaching ends..');
//     return learnFunc;
// }
// let learn = teach();
// learn();
// learn();

//--------------------------------------------------------


// function func(a, b, c, d, e) {
//     console.dir(arguments[0]);
//     console.dir(arguments[1]);
//     console.dir(arguments[2]);
//     console.dir(arguments[3]);
//     console.dir(arguments[4]);
// }
// func(10, 20, 30);


// e.g

// function sum(){
//     let len=arguments.length,
//         i=0,
//         result=0;
//     while(i<len){
//         result+=arguments[i]
//         i++
//     }     
//     return result;
// }

//--------------------------------------------------------

// Quiz

// function getFood(){
//     return "No Food"
// // }
// function getFood(pay){
//     if(arguments.length===0)return "No Food"
//     return "Biryani"
// }

// console.log(getFood());

//--------------------------------------------------------

//function with default params( ES6)

// function func(a = 1, b = 2) {

//     // if (!a) a = 1;
//     // if (!b) b = 2;

//     // a = a || 1;
//     // b = b || 2;

//     console.log(a);
//     console.log(b);
// }

// func(undefined, 20);

//--------------------------------------------------------

// function with rest param ( ES6 )

// function func(a, b, ...restParam) {
//     console.log(a);
//     console.log(b);
//     //console.dir(arguments);
//     console.log(Array.isArray(restParam));
//     console.log(restParam);
// }
// func(1, 2, 3, 4, 5, 6);

