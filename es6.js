// ? 7-Rest Function
// const sum = (...args) => {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total;
// }
// console.log(sum(1,2,3));

// ? 8-Spread Operator
// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2;

// arr2 = [...arr1]; 

// console.log(arr2);

// ? 9-Destructuring Assignment
// const HIGH_TEMPERATURES = {
//   yesterday: 75,
//   today: 77,
//   tomorrow: 80
// };

// const {today,tomorrow} = HIGH_TEMPERATURES

// ?10- Use Destructuring Assignment to Assign Variables from Objects
// const HIGH_TEMPERATURES = {
//   yesterday: 75,
//   today: 77,
//   tomorrow: 80
// };
// const highToday = HIGH_TEMPERATURES.today;
// const highTomorrow = HIGH_TEMPERATURES.tomorrow; 
// const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
// console.log(HIGH_TEMPERATURES);
// console.log(typeof(highToday));
// console.log(highToday, highTomorrow);

// ?  11-Use Destructuring Assignment to Assign Variables from Nested Objects
// const LOCAL_FORECAST = {
//   yesterday: { low: 61, high: 75 },
//   today: { low: 64, high: 77 },
//   tomorrow: { low: 68, high: 80 }
// };

// // const lowToday = LOCAL_FORECAST.today.low;
// // const highToday = LOCAL_FORECAST.today.high;
// const {today:{low:lowToday, high:highToday}} = LOCAL_FORECAST;
// console.log(lowToday);
// console.log(highToday);

// ? 12-Use Destructuring Assignment to Assign Variables from Arrays
// let a = 8, b = 6;
// console.log(a, b);
// [a, b] = [b, a]
// console.log(a, b)

// ? 13-Destructuring via rest elements
// function removeFirstTwo(list) {

//   const [,,...shorterList] = list; // Change this line

//   return shorterList;
// }

// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sourceWithoutFirstTwo = removeFirstTwo(source);

// ? 14-Use Destructuring Assignment to Pass an Object as a Function's Parameters

// const stats = {
//   max: 56.78,
//   standard_deviation: 4.34,
//   median: 34.54,
//   mode: 23.87,
//   min: -0.75,
//   average: 35.85
// };

// const half = ({max,min}) => (max + min) /2.0; 

//  ? 15-Create Strings using Template Literals
// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["no-extra-semi", "no-dup-keys"]
// };
// function makeList(arr) {
//   "use strict";
//   // change code below this line
//   const failureItems = [];
//   for (let i = 0; i < arr.length; i++) {
//     failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
//   }
//   // change code above this line
//   return failureItems;
// }

// const failuresList = makeList(result.failure);

// ? 16-Write Concise Object Literal Declarations Using Object Property Shorthand
// const createPerson = (name, age, gender) => {
  // Only change code below this line
  // return {
  //   name,
  //   age,
  //   gender
  // };
  // Only change code above this line
// };

// ? 17-Write Concise Declarative Functions with ES6
// Only change code below this line
// const bicycle = {
//   gear: 2,
//   setGear(newGear) {
//     this.gear = newGear;
//   }
// };
// Only change code above this line
// bicycle.setGear(3);
// console.log(bicycle.gear);

// ? 18-Use class Syntax to Define a Constructor Function
// Only change code below this line
// class Vegetable{
//   constructor(name){
//     this.name = name;
//   }
// }
// Only change code above this line

// const carrot = new Vegetable('carrot');
// console.log(carrot.name); 

// ? 19-Use getters and setters to Control Access to an Object
// class Thermostat {
//   constructor(fahrenheit) {
//     this._celsius = (5 / 9) * (fahrenheit - 32);
//   }
  
//   get temperature() {
//     return this._celsius;
//   }
  
//   set temperature(celsius) {
//     return this._celsius = celsius;
//   }
// }
// ? 20-Create a Module Script
{/* <html>
  <body>

<script type="module" src="index.js"></script>

  </body>
</html> */}
// ?  21-Use export to Share a Code Block
// const uppercaseString = (string) => {
//   return string.toUpperCase();
// }

// const lowercaseString = (string) => {
//   return string.toLowerCase()
// }
// export {uppercaseString,lowercaseString}

// ? 22-Reuse JavaScript Code Using import
// import {uppercaseString, lowercaseString} from './string_functions.js';
// Only change code above this line

// uppercaseString("hello");
// lowercaseString("WORLD!");

// ? 23-Use * to Import Everything from a File
// import * as stringFunctions from "./string_functions.js" 
// Only change code above this line

// stringFunctions.uppercaseString("hello");
// stringFunctions.lowercaseString("WORLD!");

// ? 24-Create an Export Fallback with export default
// export default function subtract(x, y) {
//   return x - y;
// }

// ? 25-Import a Default Export
// import subtract from "./math_functions.js"
// Only change code above this line

// subtract(7,4);

// ? 26-Create a JavaScript Promise
// const makeServerRequest = new Promise((resolve,reject)=>{})

// ? 27-Complete a Promise with resolve and reject
// const makeServerRequest = new Promise((resolve, reject) => {
//   responseFromServer represents a response from a server
//   let responseFromServer;
    
//   if(responseFromServer) {
//     resolve("We got the data")
//   } else {  
//     reject("Data not received")
//   }
// });

// ? 28-Handle a Fulfilled Promise with then
// const makeServerRequest = new Promise((resolve, reject) => {
//   responseFromServer is set to true to represent a successful response from a server
//   let responseFromServer = true;
    
//   if(responseFromServer) {
//     resolve("We got the data");
//   } else {  
//     reject("Data not received");
//   }
// });
// makeServerRequest.then(result =>{
//   console.log(result)
// })

// ?29-Handle a Rejected Promise with catch
// const makeServerRequest = new Promise((resolve, reject) => {
//   responseFromServer is set to false to represent an unsuccessful response from a server
//   let responseFromServer = false;
    
//   if(responseFromServer) {
//     resolve("We got the data");
//   } else {  
//     reject("Data not received");
//   }
// });

// makeServerRequest.then(result => {
//   console.log(result);
// });
// makeServerRequest.catch(error =>{
//   console.log(error)
// })
