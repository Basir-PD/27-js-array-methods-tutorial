/*
    Array methods:
        1- Array()
        2- .from()
        3- .isArray()
        4- .at()
        5- .concat()
        6- .every()
        7- .some()
        8- .fill()
        9- .filter()
        10- .find()
        11- .findIndex()
        12- .flat()
        13- .forEach()
        14- .indexOf()
        15- .lastIndexOf()
        16- .map()
        17- .reduce()
        18- .reduceRight()
        19- .reverse()
        20- .slice()
        21- .splice()
        22- .includes()
        23- .sort()
        24- .push()
        25- .pop()
        26- shift()
        27- unshift()
*/

let numbers = [1, 2, 3, 3, 2, 1, 4, 4, 3, 2, 1, 5];
// let fruits = ["apple", "orange", "cherry", "banana", "apple"];
// let numbers2 = [100, 200, 400, 450, 800, 1200, 2500];
let oneToFive = [1, 3, 2, 5, 4];


/*============================== 
   1 - Array
==============================*/
// Accepts 1 integer argument

const ot1 = Array(10)
// console.log('ot1', ot1)
// console.log('ot1', JSON.stringify(ot1))















/*============================== 
    2 - .from()
==============================*/
// We use this method to create an array from an iterable

// i.e Create an array from 'basir'
const ot3 = Array.from('basir')


// i.e. Create an array of numbers 1..10
const ot4 = Array.from(Array(10), (_, i) => i + 1)












/*============================== 
    3 - .isArray()
==============================*/
// This method accepts 1 argument and returns if it's an array.

const arr = [1, 2, 4];
const str = "John Doe";

const ot5 = Array.isArray(str)
// console.log('ot5', ot5)















/*============================== 
    4 - .at()
==============================*/
// Returns the element of the array of the given position.
// let fruits = ["apple", "orange", "cherry", "banana", "apple"];

// const ot6 = fruits.at(2)
// console.log('ot6', ot6)













/*============================== 
    5 - .concat()
==============================*/
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];


const ot7 = arr1.concat(arr2)
// console.log('ot7', ot7)













/*============================== 
    6 - .every()
==============================*/
// Accepts a test function and returns a boolean if ALL the elements of the array pass the test.

// let fruits = ["apple", "orange", "cherry", "banana", "apple"];
// let numbers2 = [100, 200, 400, 450, 800, 1200, 2500];

// const res = numbers2.every(elem => elem >= 100)
// console.log('res', res)














/*============================== 
    7 - .some()
    // Accepts a test function and returns true if AT LEAST ONE OF the elements of the array pass the test.
==============================*/
// let numbers2 = [100, 200, 400, 450, 800, 1200, 2500];

// const res = numbers2.some(elem => elem >= 500)
// console.log('res', res)















/*============================== 
    8 - .fill()
==============================*/
// Fills the array with a given value. Accepts 3 arguments. 1st argument is the value we need to fill. The 2nd argument is the starting index. The last argument is the ending index. The last two parameters are optional.

// const sampleArr = [1, 2, 4, 5]
// sampleArr.fill('abc', 0, 2)
// console.log('sampleArr', sampleArr)










/*============================== 
    9 - .filter()
==============================*/
// The filter() method creates a new array filled with elements that pass a test provided by a function.

// i.e. Filter array oneToHundred by even numbers

let oneToHundred = Array.from({ length: 100 }, (_, i) => i + 1);

let output = oneToHundred.filter((elem) => elem % 2 === 0)

// console.log("🚀 ~ file: index.js ~ line 228 ~ output", output)














/*============================== 
    10 - .find()
==============================*/
// Accepts a test function and returns the element that the test function passed.

// i.e. Find people whose name ends with 'r'.
const poeple = ['amir', 'john', 'stephen', 'larry']

const output2 = poeple.find(elem => elem.endsWith('n'))
// console.log('output2', output2)













/*============================== 
    11 - .findIndex()
==============================*/
// Does the same thing as .find(). Instead of returning the value, returns the position of the element in the array.
// const employees = [
//   { id: 1, name: "John", dob: 1999 },
//   { id: 2, name: "Doe", dob: 2005 },
//   { id: 3, name: "Marry", dob: 2001 },
//   { id: 4, name: "Larry", dob: 1990 },
// ];

// const ot8 = employees.findIndex(elem => elem.name === 'Marry')
// console.log('ot8', ot8)











/*============================== 
    12 - .flat()
==============================*/
// Flats the array to a given depth. Default depth is 1.
let arrFlat = [1, 2, [3, 4, [5, 6, [7, 8]]], 9, 10];

const outputArrFlat = arrFlat.flat(2)

// console.log("🚀 ~ file: index.js ~ line 298 ~ outputArrFlat", outputArrFlat)













/*============================== 
    13 - .forEach()
==============================*/
// Accepts a function that will call for each element of the array

// i.e. multiply each element of the array with 10
// let numbers1 = [10, 20, 30, 40, 50]


// numbers1.forEach((num, i, arr) => {
//     numbers1[i] = num  * 10
// })

// console.log("🚀 ~ file: index.js ~ line 320 ~ numbers1", numbers1)













/*============================== 
    14 - .indexOf()
==============================*/
// - Returns the least index of an element of the array (if found) after searching the value. Returns -1 if not found. The 2nd argument specifies the position to start the search.

// findIndex - Array of Object

// const flatArr = [20, 30, 40, 30, 50]
// const res = flatArr.indexOf(30)
// console.log('res', res)










/*============================== 
    15 - .lastIndexOf()
==============================*/
// Does the same thing as .indexOf. Instead of giving the least index, this gives you the largest index.
// const flatArr = [20, 30, 40, 30, 50]

// const res = flatArr.lastIndexOf(30)
// console.log('res', res)












/*============================== 
    16 - .map()
==============================*/
// Loops for each element of the array and executes the given function and change the value to the output of the function.

// let numbers1 = [10, 20, 30, 40, 50]

// const res = numbers1.map((num, i, arr) => {
//    return num  * 10
// })

// console.log('res', res)







/*============================== 
    17 - .reduce()
==============================*/
// Accepts a reducer function as the first argument and executes it.


// let numbers1 = [1, 2, 3, 4, 5]

// const res = numbers1.reduce((prev, current) => prev + current);
// console.log('res', res)










/*============================== 
    18 - .reduceRight()
==============================*/
// Same as .reduce() but executes from the last to start of the array. If we do a quick test, we can see this.

let numbers1 = [1, 2, 3, 4, 5]

const res = numbers1.reduceRight((prev, current) => {
    return prev + current
}, 0);

// console.log('res', res)













/*============================== 
    19 - .reverse()
==============================*/
// - Reverses the order of the elements in an array.


const arrx = [1, 4, 2, 1000, 25]

// console.log('arrx.reverse()', arrx.reverse())












/*============================== 
    20 - .slice()
    - slice an array
==============================*/
const alphabets = ['a', 'b', 'c', 'd']
// const output22 = alphabets.slice(1, 3)
const output22 = alphabets.slice(0, -1)
// console.log('output22', output22)











/*============================== 
    21 - .splice()
    The splice() method adds or removes array elements.
==============================*/

/* In fruits array
    - i.e. at position 2, add 2 elements
    - i.e. at position 2, add new items, and remove 1 item
    - i.e. At position 2, remove 2 items:
*/
// const fruits = ['apple', 'orange', 'banana', 'melon']
// fruits.splice(2, 2)

// console.log('fruits', fruits)














/*============================== 
    22 - .includes()
    - returns boolean whether an array contains a specified value.
==============================*/
// const fruits = ['apple', 'orange', 'banana', 'melon']

// const output12 = fruits.includes('pear')

// console.log("🚀 ~ file: index.js ~ line 519 ~ output12", output12)













/*============================== 
    23 - .sort()
    - to sort an array
==============================*/
// const nums = [1, 7, 4, 10, 8]
const employees = [
    { id: 1, name: "John", dob: 1999 },
    { id: 2, name: "Doe", dob: 2005 },
    { id: 3, name: "Marry", dob: 2001 },
    { id: 4, name: "Larry", dob: 1990 },
];
  
// employees.sort((a,b) => b.dob - a.dob)

// console.log('employees', employees)













/*============================== 
    24 - .push()
    - Add a new item to an array:
==============================*/
let fruits = ['apple', 'orange', 'banana', 'melon']

fruits.push('pear')













/*============================== 
    25 - .pop()
    - removes (pops) the last element of an array.
==============================*/

fruits.pop()











/*============================== 
    26 - .shift()
    - removes the first item of an array.
==============================*/


fruits.shift()












/*============================== 
    27 - .unshift()
    - adds new elements to the beginning of an array.
==============================*/

fruits.unshift('pear')




console.log('fruits', fruits)




