//New :: How Classes are faked in ECMAscript 6

// 1. new creates a new object
// 2. Set the Prototpye:
//    new looks at what it has been called on.
//      >>> new Person
//    and check the objects (person) prototype property
//      >>> Person.prototype.talk
//    and set the newly created object
//    to be the prototpye to be that object (person)
// 3. execute constructor with "this",  set to whatever object has been created
// 4. new object is returned


function Person(saying) {
  this.saying = saying
}

//Protoype is automatically on every function object

Person.prototype.talk = function(){
  console.log('I say:', this.saying)
}

//Rebuilding new
// spawn = new

function spawn(constructor) {
  var obj = {} //Step 1
  Object.setPrototypeOf(obj, constructor.prototype) //Step 2

  // console.log(arguments) Arguments keyword is an array-like object?
  // console.log(arguments.length) It has length, but it must be transformed to an array
  //                              In order to get rid of the first argument (constructor)
  // convert arguments to an array
  // var argsArray = Array.from(arguments)
  // console.log(argsArray)  Array.from is from ECMAscript 6
  // constructor.apply(obj, argsArray.slice(1))


  // In ECMAscript 5
  var argsArray = Array.prototype.slice.apply(arguments)
  constructor.apply(obj, argsArray.slice(1))  //Step 3
  return obj //Step 4
}

var crockford = spawn(Person, 'Semicolans!')
crockford.talk();
