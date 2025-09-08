//Date and Time in JS::
const mydate =new Date();
// console.log(mydate);//2025-09-04T17:03:33.140Z
// console.log(mydate.toString());//Thu Sep 04 2025 22:33:33 GMT+0530 (India Standard Time)
// console.log(mydate.toDateString());//Thu Sep 04 2025
// console.log(mydate.toLocaleString());//4/9/2025, 10:33:33 pm
// console.log(mydate.toISOString());//2025-09-04T17:03:33.140Z
// console.log(mydate.toJSON());//2025-09-04T17:03:33.140Z
// console.log(mydate.toLocaleDateString())//4/9/2025

let newdate  = new Date(2025,7,29);
// console.log(newdate.toDateString());//Fri Aug 29 2025

let myTimeStamp = Date.now();// this give time in mileseconds
// console.log(myTimeStamp);//1757005665238
// console.log(newdate.getTime());//used to comparison b/t times.
// console.log(Math.floor(Date.now()/1000)); //to get date in the seconds

console.log(mydate.getDate());//4

