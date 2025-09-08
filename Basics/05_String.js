//Starting OF String:

//Declration Of String:
const name  = "vishal";
const newName = new String('Vishal Tiwari');
//++++++++++++++++++++++++++++++++
const num =50;
// console.log(`Hello this ${name} i have ${num} repos on my github`);
// console.log(newName[0]);//v
// console.log(newName.__proto__); //{}
// console.log(newName.length);//13
// console.log(newName.toUpperCase());//the original string is not change
// console.log(newName.charAt(5));//l
// console.log(newName.indexOf('i'));//1
//++++++++++++++++++++++-------------------**********************************

const userName = "Tiwari-Vishal";
// console.log(userName.substring(0,4));//tiwa
// console.log(userName.slice(1,4));//iwa

const userNameTwo = "   vishal   ";
const url = "https://vishal%22tiwari";
console.log(userNameTwo.trim());//by using trim spaces are remove
console.log(url.replace('%22','-'));//https://vishal-tiwari
console.log(userNameTwo.includes('sharma'));//false
console.log(userName.split('-'));//output:[ 'Tiwari', 'Vishal' ]
