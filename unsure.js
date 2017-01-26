//////////////////////////
///Merged String Checker//
//////////////////////////

function isMerge(s, part1, part2) {
  // s = codewars
  // part1 = cdw
  // part2 = oears
  if (part1.charAt(0) === (s.charAt(0)) {
    // return "part1 matches s"
    return

  } else {
    return false
  }
}


function isMerge(str, substr1, substr2) {

  if (str.length !== substr1.length + substr2.length) {
    return false;
  }
  if (str.length === 0) {
    return true;
  }

  return (substr1[0] === str[0] && isMerge(str.slice(1), substr1.slice(1), substr2)) ||
  (substr2[0] === str[0] && isMerge(str.slice(1), substr1, substr2.slice(1)));

}



//////////////////
//toCamelCase/////
//////////////////

function toCamelCase(str){
  return str
    // Replaces any - or _ characters with a space
    .replace( /[-_]+/g, ' ')
    // Removes any non alphanumeric characters
    .replace( /[^\w\s]/g, '')
    // Uppercases the first character in each group immediately following a space
    // (delimited by spaces)
    .replace( / (.)/g, function($1) { return $1.toUpperCase(); })
    // Removes spaces
    .replace( / /g, '' );
}



var lastDigit = function(str1, str2){
  /* see JavaScript remarks below */
  if (str1.slice(-1) == 0 || str2.slice(-1) == 0) {
    return 0;
  }
  else {
    str1 = str1.slice(-3);
    str2 = str2.slice(-3);
    str1 = parseInt(str1);
    str2 = parseInt(str2);
    var power = Math.pow(str1,str2);
    power = power.slice(-1)
    // var newTotal = power.toString();
    // var slicedNum = newTotal.slice(-1);
    // var lastNum = parseInt(slicedNum);
    return lastNum
  }

  var lastDigit = function(str1, str2){
  /* see JavaScript remarks below */
  if (str1.slice(-1) == 0 || str2.slice(-1) == 0) {
    return 0;
  }
  else {
    str1 = str1.slice(-3);
    str2 = str2.slice(-3);
    str1 = parseInt(str1);
    str2 = parseInt(str2);
    var power = Math.pow(str1,str2);
    power = power.slice(-1)
    return power
  }


var lastDigit = function(str1, str2){
  /* see JavaScript remarks below */
  if (str1.slice(-1) == 0 || str2.slice(-1) == 0) {
    return 0;
  }
  else {
    str1 = str1.slice(-3);
    str2 = str2.slice(-3);
    str1 = parseInt(str1);
    str2 = parseInt(str2);
    console.log(str1,str2);
    var power = Math.pow(str1,str2);
    console.log(power);
    var lastone = power.toString().split('').pop()
    return lastone
  }
 }

  var lastDigit = function(str1, str2){
  /* see JavaScript remarks below */
  if (str1.slice(-1) == 0 || str2.slice(-1) == 0) {
    return 0;
  }
  else {
    str1 = str1.slice(-2);
    str2 = str2.slice(-2);
    console.log(str1);
    console.log(str2);
    // str1 = str1.join('');
    str1 = parseInt(str1);
    // str2 = str2.join('');
    str2 = parseInt(str2);
    console.log(str1,str2);
    var power = Math.pow(str1,str2);
    console.log(power);
    var lastone = power.toString().split('').pop()
    return lastone
  }
 }

var lastDigit = function(str1, str2){
  /* see JavaScript remarks below */
  var str1 = parseInt(str1);
  var str2 = parseInt(str2);
  var power = Math.pow(str1,str2);
  var newTotal = power.toString();
  var arrayTotal = newTotal.split('');
  var lastNum = arrayTotal.pop();
  var lastNum = parseInt(lastNum);
  return lastNum
}




//////////////
///ENOUGH/////
//////////////

  // function enough = (num) {
  //   if (num > )
  // }
  // var farr = arr.filter(enough)

function deleteNth(arr, x){
  return arr.reduce(function(a, v){
    // a = [];
    //
    return count(a, v) < x ? a.concat(v) : a;
  }, []);
}

function count(arr, z){
  return arr.filter(function(q){ return z == q }).length;
}


function deleteNth(arr,x) {
  var cache = {};
  return arr.filter(function(n) {
    cache[n] = (cache[n] || 0) + 1;
    return cache[n] <= x;
  });
}

/////////////
//PlayPass///
/////////////

function playPass(s, n) {

}


function shift(word,num) {
  newWord = [];
  shiftWord = [];
  newWord = word.split('');
  for(var i = 0; i<newWord.length; i++){
    var code = newWord[i].charCodeAt();
      if(code + num > 122) {
        var code = code + num;
        var remainder = code - 122;
        var newcode = (96 + remainder);
        newcode = String.fromCharCode(newcode);
        shiftWord.push(newcode);
        console.log(shiftWord)
      } else if (code + num > 90) {
        var code = code + num;
        var remainder = code - 90;
        var newcode = (64 + remainder);
        newcode = String.fromCharCode(newcode);
        shiftWord.push(newcode);
        console.log(shiftWord)
      } else {
        newcode = code + num
        newcode = String.fromCharCode(newcode);
        shiftWord.push(newcode)
        console.log(shiftWord);
      }
      // if(typeof newWord[i] === 'number') {
      //   var code = word[i];
      //   code = (9 - code);
      //   shiftWord.push(code);
      // }
  }
  return shiftWord;
}

// (a-z) = (97-122)
// (A-z) = (65-90)
// (0-9) = (48-57)


// This solution works...(n-3) in the for loop creates the
//desired result, if n = 3,
//result[i-1] = result[3-1] = result[2] = 1
//result[i-1] = result[3-2] = result[1] = 1
//result[i-1] = result[3-3] = result[0] = 0
//result.push(2)


function tribonacci(signature,n){

if (n < 3) {
    return signature.slice(0,n);
  }

  var result = signature;

  for (var i = 3; i < n; i++) {
    result.push((result[i-1] + result[i-2] + result[i-3]));
  }

  return result;
}

tribonacci([0,1,1],10);

//////////////////
//TRIPLEDOUBLE////
//////////////////

// 7 of test cases were failures? not sure why

function tripledouble(num1, num2) {
  var num1string = num1.toString();
  var num2string = num2.toString();
  var num1arr = num1string.split('')
  var num2arr = num2string.split('')

for (var i = 0; i <= num1arr.length; i++) {
    if (num1arr[i] === num1arr[i+1] && num1arr[i] === num1arr[i+2]) {
        var triple = true
    }
}

for (var i = 0; i <= num2arr.length; i++) {
    if (num2arr[i] === num2arr[i+1]) {
        var double = true
    }
}

  if (triple === true && double === true)
    {
      return 1
    }
    else
    {
      return 0
    }
}


/////////////////
///Maskify///////
/////////////////

// VM485:1 Uncaught ReferenceError: Invalid left-hand side in assignment
//This is error is a result of the fact that you cannot asign a new value to the result of a function
// So var num = 123
// num.charAt(0) = 'd' will return an error
//instead....

function maskify(cc) {
  return (cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4))
};

//use regex to replace every character but the last 4 characters using a combination of slice and regex!

/////////////////
////MinMax///////
/////////////////

//sort array and then assign sorted arr to new var and select first and last in array....
//selected last item in array was tricky to me, thought .length would return numerical amount of items in array,
//like an index, not the actual value, but you must remember that when you use arr[arr.length -1] it will return the value, not the index

function minMax(arr){
  var newArr = arr.sort(function(a,b){return a - b})
  var nums = [newArr[0], newArr[newArr.length -1]]
  return nums
}


// BEST solution
// PRACTICE .APPLY!!!!

function minMax(arr){
  return [Math.min.apply(Math, arr), Math.max.apply(Math, arr)];
}


///////////////
////XO/////////
///////////////

function XO(str) {
  var strchar = str.split('')
  var countX = 0;
  var countO = 0;
  for (var i = 0; i < strchar.length; i++){
     if (strchar[i] === 'x' || strchar[i] === 'X') {
      countX += 1
     }
   }

 for (var i = 0; i < strchar.length; i++){
     if (strchar[i] === 'o' || strchar[i] === 'O') {
      countO += 1
     }
   }

  if (countX === countO) {
    return true
  }
  else if(countX === 0 && countO === 0) {
    return true
  }
  else {return false}
}


//////BEST SOLUTION FOR XO/////

function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

/////////////////
///Baker/////////
////////////////



function cakes(recipe, available) {
 var result = [];
 for (var prop in recipe) {
     var recipeprop = recipe[prop];
     console.log(recipe[prop]);
   }
 for (var prop in available) {
     var availableprop = available[prop];
     console.log(available[prop]);
   }
  result.push(recipeprop/availableprop)
  console.log(result)
  return result
}


//////This works but how am I able to access available props
///without explicitly using it in the for loop?


function cakes(recipe, available) {
    // TODO: insert code
    var result = [];
    for (var prop in recipe) {
        var availableProp = available[prop] || 0;
        var recipeProp = recipe[prop] || 0;
        console.log('availableProp:' + availableProp);
        console.log('recipeProp:' + recipeProp);
        if (recipeProp > 0) {
            result.push(Math.floor(availableProp / recipeProp));
        }
    }
    return Math.min.apply(Math, result);
}

/////Best Solution for Baker

function cakes(recipe, available) {
  return Object.keys(recipe).reduce(function(val, ingredient) {
    return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
  }, Infinity)
}

/////////////
///SCRAMBLE//
/////////////

function scramble(str1, str2) {
    var array1 = str1.split("").sort();
    var array2 = str2.split("").sort();
    var i = 0;
    for(var x = 0; i<array2.length && x<=array1.length; x++) {
        if(array2[i] === array1[x]) {
            i++;
        }
    }
    return (x <= array1.length);
}

Dictionary Solution

