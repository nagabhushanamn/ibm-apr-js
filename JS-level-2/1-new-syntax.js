
//-----------------------------------------------------
// 4. object-lieral-enhancements
//-----------------------------------------------------

// let name = "Nag";
// let age = 33;

// ES5
// let person = {
//     name: name,
//     age: age,
//     sayName: function () {
//         console.log('im ' + this.name);
//     },
//     address: 'chennai'
// }
// //ES6
// let dynamicField = "office";// home | office | vacation
// let newPerson = {
//     name,
//     age,
//     sayName() {
//         console.log('im ' + this.name);
//     },
//     [dynamicField + "-address"]: 'chennai',
//     [1 + 2]: 'three',
//     ["do Something"]() {
//         console.log('ill do something..');
//     }
// };

//-----------------------------------------------------
// 5. de-structuring
//-----------------------------------------------------

// A. array de-sructuring

// let nums = [10, 20, 30, 40, 50, [60, 70]]

// // let n1 = nums[0];
// // let n2 = nums[1];

// // or

// // let [n1, n2, n3 = 300, , n5, [n6, n7]] = nums;

// let n1;
// let n2;
// [n1, n2] = nums;



// B. Object destructuring

let person = { name: 'Nag', age: 33 }

// let myName=person.name;
// let myAge=person.age;

// or

// let { name: myName, age: myAge } = person;

// let { name: name, age: age } = person;
// or
// let { name, age } = person;

let name;
let age;
({ name, age } = person);


//-----------------------------------------------------
// 5. spread operator
//-----------------------------------------------------

function func(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

let nums = [10, 20, 30];
// func(nums[0], nums[1], nums[2]);
// or
// func(...nums);


let a1 = [1, 2, 3]
let a2 = [7, 8, 9]

let newArr = [...a1, 4, 5, 6, ...a2];


//-----------------------------------------------------
// 8. symbol type
//-----------------------------------------------------

/*
    ==> unique & immutable value, used as object's identifier property
*/

// how to create symbol ?

// let symbol = Symbol.for('key');

// let javaSymbol = Symbol.for('java');
// let jsSymbol = Symbol.for('js');


// let e1 = { name: 'A', [javaSymbol]: 'java,spring,hibernate' };
// let e2 = { name: 'B', [jsSymbol]: 'js,react,node.js' };
// let e3 = { name: 'C', [jsSymbol]: 'js' };

// if (e2[jsSymbol]) {
//     console.log('hello js employee,');
//     console.log(e2[jsSymbol]);
// }


// let menu = ["idly", "vada", "poori"];

// // 
// let newMenu = [...menu, "biryani"]
// //
// let [item1, item2, item3, item4] = newMenu;
// //
// for (let item of menu) {
//     console.log(item);
// }
//-----------------------------------------------------------
// 9. custom iterable object
//-----------------------------------------------------

// let idMaker = {
//     [Symbol.iterator]: function () {
//         let id = 0;
//         return {
//             next: function () {
//                 id++;
//                 return { value: id <= 10 ? id : undefined, done: id <= 10 ? false : true }
//             }
//         };
//     }
// };

// // let [id1, id2] = idMaker;

// // let ids = [...idMaker];

// for (let id of idMaker) {
//     console.log(id);
// }

//-----------------------------------------------------------
// 9. OO with class-syntax
//-----------------------------------------------------------


// Es5

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.sayName = function () {
//     console.log('im ' + this.name);
// }
// Person.prototype.sayAge = function () {
//     console.log('im ' + this.age + " old");
// }

// Es6

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log('Person::constructor()');
    }
    sayName() {
        console.log('im ' + this.name);
    }
    sayAge() {
        console.log('im ' + this.age + "old");
    }
}
// var p1 = new Person('Nag', 33);

class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
        console.log('Employee::construtor');
    }
    saySalary() {
        console.log('im ' + this.salary + " only");
    }
    askForRaise() {
        return this.salary * 0.02;
    }
}

// let e = new Employee('Nag', 33, 1000.00);

class Boss extends Employee {
    askForRaise() {
        return this.salary * 0.2 + super.askForRaise();
    }
}

let boss = new Boss('Nag', 33, 1000.00);


class Abc {
    static staMethod() {
        console.log('....');
    }
}
Abc.staVar = 123;
