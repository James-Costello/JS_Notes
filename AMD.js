AMD
(Asynchronous Module Definition)

// An offshoot of CommonJS that emphasizes the browser

// Workflow for the browser where script tags are everywhere

// used by scirpt loaders like Require.JS, curl.js, head.js etc.

// define(id? dependencies? factory);

// id is basically a path so

// define('path/to/module', function(){

// });

// R.js optimization tool for Require.js

// Require.JS will automatically inject them into your module.

DEPENDENCIES

// define(['jquery', 'd3'], function($, d3){

// });

// Require.js turns this array of dependencies into script tags, (with their own dependenceies loaded), into the head of the document.

FACTORY

// IT IS CALLED ONCE PER MODULE
// IF the factory function returns anything then that object should be assigned as the exported value for the module.

//foo.js
// define(['jquery', 'd3'], function($, d3){
//
//  return{ name: 'FOO'}
//  whatever is returned here is
//  the exported value of the module.
// });

THINGS YOU CAN DO WITH FACTORY
// return an object, return a function
// Create utilities
// Return constructors -----
//EXAMPLE

//person.js
define(function() {
  function Person(name) {
    this.name = name;
    this.sayHello = function() {
      console.log('hello my name is ' + this.name);
    }
  }
  return Person;
});

//app.js
define(['person'], function(Person){
  var rob = new Person('Rob');
  rob.sayHello(); // Hello my  name is Rob
});

// DEPENDENCY ORDER MATTERS!!!!

define(['jQuery', 'someJqueryplugin'], function($){
  // $ is mapped to the first dependency.
})


// Note that script tags get loaded synchronously


// Configuration Properties

BASEURL

//config.js

requirejs.config({
  baseUrl: './assests/js'
})

//Paths

//Shim

A shim allows you to load non-AMD librarues in the correct order


single page vs multi-page




