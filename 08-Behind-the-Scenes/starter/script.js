'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
    }
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
*/
// console.log(me);
// console.log(job);
// console.log(year);
// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));
// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// var numProducts = 10;
// if (!numProducts) deleteShoppingCart();
// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;
// console.log(this);
// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);
// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1991);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };
// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();
// var firstName = 'Matilda';
// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//     // const self = this; // self or that
//     // const isMillenial = () => {
//     //   console.log(this.year >= 1981 && this.year <= 1996);
//     // };

//     //solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },
//   greet: () => console.log(`Hey ${this.firstName}`),
// };
// jonas.greet();

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// const jessica1 = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };
// function marryPerson(originalPerson, newLastName) {
//   originalPerson.lastName = newLastName;
//   return originalPerson;
// }

// const marriedJessica = marryPerson(jessica1, 'Davis');
// // const marriedJessica = jessica;
// // marriedJessica.lastName = 'Davis';
// console.log('Before marriage:', jessica1);
// console.log('After marriage:', marriedJessica);

// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
//   family: ['Alice', 'Bob'],
// };

// const jessicaCopy = { ...jessica };
// jessicaCopy.lastName = 'Davis';

// // console.log('Before marriage:', jessica);
// // console.log('After marriage:', jessicaCopy);

// // jessicaCopy.family.push('Mary');
// // jessicaCopy.family.push('John');
// console.log('Before marriage:', jessica);
// console.log('After marriage:', jessicaCopy);

// //Deep copy
// const jessicaClone = structuredClone(jessica);
// jessicaClone.family.push('Mary');
// jessicaClone.family.push('John');

// console.log('Before marriage:', jessica);
// console.log('After marriage:', jessicaClone);
