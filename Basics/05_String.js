//Starting OF String:

//Declration Of String:
const name  = "vishal";
const newName = new String('Vishal Tiwari');
//++++++++++++++++++++++++++++++++
const num =50;
console.log(`Hello this ${name} i have ${num} repos on my github`);
// console.log(newName[0]);
// console.log(newName.__proto__); 
// console.log(newName.length);
//console.log(newName.toUpperCase());//the original string is not change
// console.log(newName.charAt(5));
// console.log(newName.indexOf('i'));
//++++++++++++++++++++++-------------------**********************************

const userName = "Tiwari-Vishal";
// console.log(userName.substring(0,4));
// console.log(userName.slice(-8,4));

const userNameTwo = "   vishal   ";
const url = "https://vishal%22tiwari";
console.log(userNameTwo.trim());
console.log(url.replace('%22','-'));
console.log(userNameTwo.includes('sharma'));
console.log(userName.split('-'));
