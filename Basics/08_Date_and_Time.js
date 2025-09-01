//Date and Time in JS::
const mydate =new Date();
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString())

let newdate  = new Date(2025,7,29);
// console.log(newdate.toDateString());

let myTimeStamp = Date.now();// this give time in mileseconds
console.log(myTimeStamp);
console.log(newdate.getTime());//used to comparison b/t times.
console.log(Math.floor(Date.now()/1000)); //to get date in the seconds

console.log(mydate.getDate());

