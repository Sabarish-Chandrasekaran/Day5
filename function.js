// a.Print odd numbers in an array
//   anonymous function
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const odds = [];

let oddNumber = function(number){
for(i=0;i<number.length;i++) {
  if (number[i] % 2 !== 0) {   //if number in an array of index is not returning reminder 0
    odds.push(number[i]);      //that number will be pushed using<.push> in empty array
  }
}console.log(odds);
}
oddNumber(arr) // output=>[1, 3, 5, 7, 9]

//   IIFE
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const odds = [];

(function(number){
for(i=0;i<number.length;i++) {
  if (number[i] % 2 !== 0) {
    odds.push(number[i]);
  } 
}console.log(odds);
})(arr) // output=>[1, 3, 5, 7, 9]

//   arrow function
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const odds = [];

let oddNumber = (number) => {
for(i=0;i<number.length;i++) {
  if (number[i] % 2 !== 0) {
    odds.push(number[i]);
  }
}console.log(odds);
}
oddNumber(arr) // output=>[1, 3, 5, 7, 9]


// b.Convert all the strings to title caps in a string array
//   anonymous function
let titleCase = function (str) {
str = str.toLowerCase().split(' ');              //converting string into lower case ,then splitting at<space> and converting them to each array element        
for (var i = 0; i < str.length; i++) {
	str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);//modifying each element by changing first letter into upercase by<.charAt(0)> and 
}                                                             //adding remaining lowercase with uppercase
return str.join(' ');    //joining every element by <space and converting into required string
}
console.log(titleCase("hElLO wORld"));//output=>Hello World

//    IIFE
(function (str) {
str = str.toLowerCase().split(' ');
for (var i = 0; i < str.length; i++) {
	str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
}
console.log(str.join(' '));
}
("hElLO wORld"))//output=>Hello World

//   arrow function
let titleCase = (str) => {
str = str.toLowerCase().split(' ');
for (var i = 0; i < str.length; i++) {
	str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
}
return str.join(' ');
}
console.log(titleCase("hElLO wORld"));//output=>Hello World


// c.Sum of all numbers in an array
//  anonymous function
let arr = [2,5,12,4,17,10,3];
let add = function(value){
    let sum = 0;
    value.forEach(function(number){
        sum +=number;     //adding each array element and assigning to sum varaible.
    })
    return sum;
}
console.log(add(arr))

//    IIFE
let arr = [2,5,12,4,17,10,3];
(function(value){
    let sum = 0;
    value.forEach(function(number){
        sum +=number;
    })
    console.log(sum);
})(arr)//output=>53

//  arrow function
let arr = [2,5,12,4,17,10,3];
let add = (value) => {
    let sum = 0;
    value.forEach(function(number){
        sum +=number;
    })
    return sum;
}
console.log(add(arr))//output=>53


// d.Return all the prime numbers in an array
//   anonymous function
let array = [34,12,53,3,4,5,13,15,16]
let isPrime = function (num) {
    for (let i = 2; i <=Math.sqrt(num); i++) { //square root of max value is enough to find prime no.
      if (num % i === 0) {
        return false;                    //returning value which is prime
      }
    }
    return num > 1;                      //returning value greatwr that 1
  }
  console.log(array.filter(isPrime));   //filtering from the array which are non prime
                                        //output=>[ 53, 3, 5, 13 ]

//   arrow function
let array = [34,12,53,3,4,5,13,15,16]
let isPrime = (num) => {
    for (let i = 2; i <=Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }
  console.log(array.filter(isPrime));//output=>[ 53, 3, 5, 13 ]


// e.Return all the palindromes in an array
//   anonymous function
var words = ['foo', 'racecar', 'pineapple', 'porcupine', 'pineenip'];
let isPalindrome = function (input) {
var arr = [];
var str = input.slice(0);
var pal = str.toString().split("").reverse().join("").split(",");//converting every element into stringby<.toString> and by reverse,join,split into reverse spelled word
//console.log(pal);
for (let i = 0; i < input.length; i++) {
  for (let k = 0; k < pal.length; k++) {
    if (input[i] == pal[k]) {  //comparing each string with reverse spelled string
      arr.push(input[i])
    }
  }
}
return arr;
}
console.log(isPalindrome(words))//output=>[ 'racecar', 'pineenip' ]
  
//   IIFE
var words = ['foo', 'racecar', 'pineapple', 'porcupine', 'pineenip'];
(function (input) {
var arr = [];
var str = input.slice(0);
var pal = str.toString().split("").reverse().join("").split(",");
//console.log(pal);
for (let i = 0; i < input.length; i++) {
  for (let k = 0; k < pal.length; k++) {
    if (input[i] == pal[k]) {
      arr.push(input[i])
    }
  }
}
console.log(arr);
})
(words)//output=>[ 'racecar', 'pineenip' ]

//   arrow function
var words = ['foo', 'racecar', 'pineapple', 'porcupine', 'pineenip'];
let isPalindrome = (input) => {
var arr = [];
var str = input.slice(0);
var pal = str.toString().split("").reverse().join("").split(",");
//console.log(pal);
for (let i = 0; i < input.length; i++) {
  for (let k = 0; k < pal.length; k++) {
    if (input[i] == pal[k]) {
      arr.push(input[i])
    }
  }
}
return arr;
}
console.log(isPalindrome(words))//output=>[ 'racecar', 'pineenip' ]


// f.Return median of two sorted arrays of the same size
//   arrow function
let num1 = [1,2,5];
let num2 = [3,4,8];
let isMedian = (aar1,aar2) => {
    let totalarray = [...aar1,...aar2].sort((a,b)=>a-b);//adding and sorting botharrayelement in acsending order
    let median = Math.floor(totalarray.length/2);   //since we are indicating middle index,to convert decimel into whole no. we use <.floor>
    let result = (totalarray[median]+totalarray[median-1])/2;//adding two middle element n diving by 2 toget median
    return result;
}
console.log(isMedian(num1,num2))//output=>3.5 


// g.Remove duplicates from an array
//   arrow function
var str = ["apple", "mango", "apple", 
            "orange", "mango", "mango"];
  
let removeDuplicates = (arr) => {
    let sortarray = [...new Set(arr)];//<Set> is used sort many times occuring elements by uniqueness
    console.log(sortarray);
            }
    removeDuplicates(str);//output=> 'apple', 'mango', 'orange' ]


// h.Rotate an array by k times
//   arrow function
let nums = [1, 2, 3, 4, 5]
let k= 2 //no.of elements to shift
let rotateArray1 = (nums, k) => {
        for (let i = 0; i < k; i++) {
            nums.unshift(nums.pop());//removing no.by<.pop> and shifting it at start of array by<.unshift>
        } 
        return nums;
      }
      console.log(rotateArray1(nums,k))//[ 4, 5, 1, 2, 3 ]





// JavaScript Functions — Warmup Pbms

// 1.Write a function called “addFive”.
// Given a number, “addFive” returns 5 added to that number
var num = 10;
function addFive(num) { 
  return num+5;
}
var result = addFive(num)
console.log(result);//output=>15

// 2.Write a function called “getOpposite”.
// Given a number, return its opposite
var num = 5.5;
function getOpposite(num) {
if(Number.isInteger(num)){
  return num*(-1);
}
else{
  return -1
}
}
var result = getOpposite(num)
console.log(result);//output=>-1

// 3.Fill in your code that takes an number minutes and converts it to seconds.
var min = 5;
function toSeconds(min) {
  return min*60;
}
var secs = toSeconds(min)
console.log(secs)//output=>300

// 4.Create a function that takes a string and returns it as an integer.
var mystr = "5";
function toInteger(mystr) {
  return parseInt(mystr);
}
var myint = toInteger(mystr)
console.log(myint);//output=>5

// 5.Create a function that takes a number as an argument, increments the number by +1 and returns the result.
var myint = 0;
function nextNumber(myint) {
  return myint+1;
}
var myNextint = nextNumber(myint)
console.log(myNextint);//output=>1

// 6.Create a function that takes an array and returns the first element.
var arr = [1, 2, 3];
function getFirstElement(arr) {
  return arr[0];
}
var data = getFirstElement(arr)
console.log(data);//output=>1

// 7.Convert Hours into Seconds
// Write a function that converts hours into seconds.
var arr = [1, 2, 3];
function hourToSeconds(arr) {
  for(i=0;i<arr.length;i++){
    arr[i] = 3600*arr[i];
  }
  return arr;
}
var data = hourToSeconds(arr)
console.log(data);//output=>[ 3600, 7200, 10800 ]

// 8.Find the Perimeter of a Rectangle
// Create a function that takes height and width and finds the perimeter of a rectangle.
function findPerimeter(num1,num2) {
  return (num1+num2)*2
}
var peri = findPerimeter(6,7)
console.log(peri);//output=>26

// 9.Less Than 100?
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(num1,num2) {
  if(num1+num2 < 100){
    return true}
    else{
    return false
    }
}
var res = lessThan100(22,15)
console.log(res);//output=>true

// 10.There is a single operator in JavaScript, capable of providing the remainder of a
// division operation. Two numbers are passed as parameters. The first parameter
// divided by the second parameter will have a remainder, possibly zero. Return
// that value.
function remainder(num1,num2) {
  return num1%num2;
}
var res = remainder(1,3)
console.log(res);//output=>1

// 11.Old macdonald had a farm:
// MacDonald is asking you to tell him how many legs can be counted among all his animals. 
// The farmer breeds three species:
// turkey = 2 legs
// horse = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species.
// You have to implement a function that returns the total number of legs of all the animals.
function CountAnimals(tur,horse,pigs) {
  var a = 2*tur;
var b = 4*(horse+pigs);
return a+b
}
var legs = CountAnimals(2,3,5)
console.log(legs);//output=>36

// 12.Frames Per Second
// Create a function that returns the number of frames shown in a given number of 
// minutes for a certain FPS.
function frames(num1,num2) {
  return num1*num2*60;
}
var fps = frames(1,2)
console.log(fps);//output=>120

// 13.Check if an Integer is Divisible By Five
// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
function divisibleByFive(num1) {
  if(num1%5===0){
    return true;
  }
else{
  return false;
}
}
var divisible = divisibleByFive(5)
console.log(divisible);//output=>tue

// 14.Write a function called “isEven”.
// Given a number, “isEven” returns whether it is even
function isEven(num){
  if(parseInt(num)==num){
  if(num%2===0){
    return true
  }
  else{
    return false
  }
  }
  else{
    return -1
  } 

 }
 var even = isEven(5)
 console.log(even);//output=>false

//  15.Write a function called “areBothOdd”.
//  Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.
function areBothOdd(num1, num2){
  if((num1%2!=0)&&(num2%2!=0)){
    return true
  }
else{
  return false
  }
 }
 var odd = areBothOdd(2,5)
 console.log(odd);//output=>false

//  16.Write a function called “getFullName”.
//  Given a first and a last name, “getFullName” returns a single string with the 
//  given first and last names separated by a single space.
function getFullName(firstName, lastName){
  if((firstName!='')&&(lastName!='')){
    return firstName + ' ' + lastName
  }
  else{
    return firstName + lastName
  }
 }
 var name = getFullName("john","doe")
 console.log(name);//output=>john doe

//  17.Write a function called “getLengthOfWord”.
//  Given a word, “getLengthOfWord” returns the length of the given word.
function getLengthOfWord(word1){
  if(String.isString(word1)){
    return word1.length
    }
  else{
    return -1
  }
 }
 console.log(getLengthOfWord('hello'))//output=>5

//  18.Write a function called “isSameLength”.
//  Given two words, “isSameLength” returns whether the given words have the same length.
function isSameLength(word1, word2){
  if(word1.length == word2.length){
    return true;
  }
  else{
    return false;
  }
 }
 console.log(isSameLength("hello","world"))//output=>true

//  19.Create a function to calculate the distance between two points defined by their x, y coordinates
console.log(getDistance(100, 100, 400, 300));
function getDistance(x1, y1, x2, y2)
{
  var d1 = (x1-x2)*(x1-x2);d2=(y1-y2)*(y1-y2);
  return d1+d2;
}//output=>130000

// 20.Write a function called “getNthElement”.
// Given an array and an integer, “getNthElement” returns the element at the given 
// integer, within the given array. If the array has a length of 0, it should 
// return ‘undefined’.
function getNthElement(array,n){
  return array[n-1];
 }
 console.log(getNthElement([1,3,5],1))//output=>1

//  21.Write a function called “getLastElement”.
//  Given an array, “getLastElement” returns the last element of the given array.
//  If the given array has a length of 0, it should return ‘-1’.
function getLastElement(array){
  if(array.length>0)
  return array[array.length-1]
  else
  return -1
 }
 console.log(getLastElement([1,2,3,4]))//output=>4

//  22.Write a function called “getProperty”.
//  Given an object and a key, “getProperty” returns the value of the property at 
//  the given key. If there is no property at the given key, it should return undefined.
var obj = {
  mykey: "value"
 };
 function getProperty(obj,key) {
  return obj[key] ; 
 }
 console.log(getProperty(obj,"mykey"));//output=>value

//  23.Write a function called “addProperty”.
//  Given an object and a key, “addProperty” adds a new property on the given object with a value of true.
var obj = {
  mykey: "value"
 };
 function addProperty(obj,key){
   obj[key]=true; 
   return obj;
 }
 console.log(addProperty(obj, "mykey"));//mykey: true

//  24.Write a function called “removeProperty”.
//  Given an object and a key, “removeProperty” removes the given key from the given object.
var obj = {
  "mykey":"value",
  "mykey2" : "value2",
  "mykey3" : "value3"
 };
 function removeProperty(obj, key){
  delete obj[key];
  return obj;
 }
 console.log(removeProperty(obj,"mykey"));//output=>{ mykey2: 'value2', mykey3: 'value3' }

//  25.Return an array, where the first element is the count of positives numbers and 
//  the second element is sum of negative numbers.
var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function countPositivesSumNegatives(arr) {
	 var tempArr = [0,0];
	 for(let i=0;i<arr.length;i++)
	 {
	 	if(arr[i]>=0)
	 		tempArr[0]++;
	 	else
	 		tempArr[1]= tempArr[1]+ arr[i];
	 }
	 return tempArr;
}
var ar2 = countPositivesSumNegatives(arr);
console.log(ar2);//output=>[ 6, -17 ]

// 26.Create a function that receives an array of numbers and returns an array 
// containing only the positive numbers
function getPositives(arr)
{
	var tempArr=[];
 	// your code here
 	for(let i=0;i<arr.length;i++)
 	{
 		if(arr[i]>=0)
 			tempArr.push(arr[i]);
 	}
 	return tempArr;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);//output=>[ 10, 12, 5, 90, 0, 1 ]

// 27.Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n 
// (where n is an exponent).
// n = 0 -> 2⁰ -> [1]
// n = 1 -> 2⁰, 2¹ -> [1,2]
// n = 2 -> 2⁰, 2¹, 2² -> [1,2,4]
function powersOfTwo(n){
	var temp = [];
	for(let i=0;i<=n;i++)  
	{
		temp.push(Math.pow(2,i))
	}
	return temp.join(",");
}
console.log(powersOfTwo(0));//output=>1
console.log(powersOfTwo(1));//output=>1,2
console.log(powersOfTwo(2));//output=>1,2,4

// 28.Find the maximum number in an array of numbers
function findMax(ar)
{
	// your code here
	let high = ar[0];
	for(let i=1;i<ar.length;i++)
	{
		if(ar[i]>high)
			high = ar[i]
	}
	return high;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max: ", max);//output=>Max: 90

// 29.Print the first 100 prime numbers
printPrimes(100);
// Function prints the first nPrimes numbers
function printPrimes(nPrimes){
  var n = 0;
  var i = 2;
  
  while(n < nPrimes)
  {
    if (isPrime(i))
    {
      console.log(n, " ", i);
      n++;
    }
    
    i++;
  }
 }

// Returns true if a number is prime
function isPrime(n)
{
  let count = 0;
	for(let i=1;i<=n;i++)
	{
		if(n%i===0)
			count++;
	}
	return count===2;
}//output=>   0   2
              // 1   3
              // 2   5
              // 3   7
              // 4   11
              // 5   13
              // 6   17
              // 7   19
              // 8   23
              // 9   29
              // 10   31
              // 11   37
              // 12   41
              // 13   43
              // 14   47
              // 15   53
              // 16   59
              // 17   61
              // 18   67
              // 19   71
              // 20   73
              // 21   79
              // 22   83
              // 23   89
              // 24   97
              // 25   101
              // 26   103
              // 27   107
              // 28   109
              // 29   113
              // 30   127
              // 31   131
              // 32   137
              // 33   139
              // 34   149
              // 35   151
              // 36   157
              // 37   163
              // 38   167
              // 39   173
              // 40   179
              // 41   181
              // 42   191
              // 43   193
              // 44   197
              // 45   199
              // 46   211
              // 47   223
              // 48   227
              // 49   229
              // 50   233
              // 51   239
              // 52   241
              // 53   251
              // 54   257
              // 55   263
              // 56   269
              // 57   271
              // 58   277
              // 59   281
              // 60   283
              // 61   293
              // 62   307
              // 63   311
              // 64   313
              // 65   317
              // 66   331
              // 67   337
              // 68   347
              // 69   349
              // 70   353
              // 71   359
              // 72   367
              // 73   373
              // 74   379
              // 75   383
              // 76   389
              // 77   397
              // 78   401
              // 79   409
              // 80   419
              // 81   421
              // 82   431
              // 83   433
              // 84   439
              // 85   443
              // 86   449
              // 87   457
              // 88   461
              // 89   463
              // 90   467
              // 91   479
              // 92   487
              // 93   491
              // 94   499
              // 95   503
              // 96   509
              // 97   521
              // 98   523
              // 99   541

// 30.Create a function that will return in an array the first “nPrimes” prime numbers 
// greater than a particular number “startAt”
function getPrimes(nPrimes, startAt)
{
var arr =[];
for(let i=1;arr.length!=nPrimes;i++)
{
	if(isPrime(i) && i>startAt)
		arr.push(i)
}
return arr;
	
}
// Returns true if a number is prime
function isPrime(n)
{
 let count = 0;
	for(let i=1;i<=n;i++)
	{
		if(n%i===0)
			count++;
	}
	return count===2;
}
console.log(getPrimes(10, 100));//output=>
                                          // [
                                          //   101, 103, 107, 109,
                                          //   113, 127, 131, 137,
                                          //   139, 149
                                          // ]

// 31.Reverse a string
function reverseString(s)
{
   return s.split("").reverse().join("");
}
var s = reverseString("Hello World");
console.log(s);//output=>dlroW olleH

// 32.Create a function that will merge two arrays and return the result as a new array
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = mergeArrays(ar1, ar2);
console.log(ar);
function mergeArrays(ar1, ar2)
{
 var result = [];
for(let el of ar1)
 {
 result.push(el);
 }
 
 for(let el of ar2)
 {
 result.push(el);
 }
 return result;//output=>[ 1, 2, 3, 4, 5, 6 ]
}

// 32.Calculate the sum of numbers received in a comma delimited string
console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
function sumCSV(s)
{
  return s.split(",").map(Number).reduce((cur,sum)=>cur+sum,0);
}//output=>57.3