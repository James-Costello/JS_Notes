// Part 1.
// Functions are vaules

// Functions can be assigned to variables

// Functions can be assigned to other Functions


// Composition --- smaller functions within a bigger function

// Composability

// filter is a method/function on the array which accepts another function as its arguments
// which is uses to return a new filtered version of the array.

      // var animals = [
      //   {name: "ABE", species: "dog"},
      //   {name: "NED", species: "dog"},
      //   {name: "MAT", species: "cat"},
      //   {name: "FOX", species: "cat"},
      //   {name: "MOOT", species: "cat"},
      //   {name: "STAN", species: "dog"},
      //   {name: "HOOPLE", species: "dog"},
      //   {name: "ACE", species: "dog"}]


      // var dogs = animals.filter(function(animal) {
      //   if (animal.species === 'dog' && animal.name == "HOOPLE") {
      //     return animal.name
      //   }
      // });

      // console.log(dogs)

// MAP

// Map is another higher order function, also like filter it goes through an array
// but it transforms them,

        // var animals = [
        // {name: "ABE", species: "dog"},
        // {name: "NED", species: "dog"},
        // {name: "MAT", species: "cat"},
        // {name: "FOX", species: "cat"},
        // {name: "MOOT", species: "cat"},
        // {name: "STAN", species: "dog"},
        // {name: "HOOPLE", species: "dog"},
        // {name: "ACE", species: "dog"}]

        // var names = animals.map(function(animal) {
        //   return animal.name
        // });

        // console.log(names)

// Closures

// The reason is that functions in JavaScript form
// closures. A closure is the combination of a function
// and the lexical environment (or simply "environment")
// within which that function was declared.
// The environment consists of any local variables
// that were in-scope at the time that the closure
// was created. In this case, myFunc is a reference
// to the instance of the function displayName created
// when makeFunc is run. The instance of displayName
// maintains a reference to its lexical environment,
// within which the variable name exists. Hence when
// invoking myFunc, the variable name remains available
// for use and "Mozilla" is passed to alert.


// Reduce AKA the multi tool for list transformations

//   var orders = [
//   { amount: 250},
//   { amount: 473},
//   { amount: 350},
//   { amount: 490},
//   { amount: 400},
//   ]

//   var totalAmount = orders.reduce(function(sum, order){
//     console.log("hello", sum, order)
//     return sum + order.amount
//   }, 0)

// console.log(totalAmount)

// More reduce

//  var fs = require('fs')
//  IS THE SAME AS
// import fs from 'fs'

// REDUCE PART 2 use trim(), split(), map(), reduce();
// to transform txt document into valid JSON.

// fs.redFileSync('data.txt', )

// Closures, Currying, Recursion

// let countDownFrom = (num) => {
//     if (num ===0) return;
//     console.log(num)
//     countDownFrom(num -1)
// }

// countDownFrom(10)

// Every time you use a loop, you can use recursion instead
// However it is not always the case the other way around
// Recursion can do things loops can not

//
//
//
//
//
//
//
//
//
