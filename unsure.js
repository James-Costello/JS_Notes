// This solution works but I am unclear
//as to how n-3 in the for loop creates the
//desired result, if n = 3, wouldn't the result be
//...WAIT IT ALL MAKES SENSE NOW....
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
//This is error is a result of the fact that you cannot asgin a new value to the result of a function
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
