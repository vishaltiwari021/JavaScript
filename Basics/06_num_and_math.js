const score = 300;
// console.log(score);

const balance = new Number(499);
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toFixed(2));//after decimal how many digit value display

const simple = 23.099879;
// console.log(simple.toPrecision(3));//after how many digit the number will precise

const value = 10000000000000;
// console.log(value.toLocaleString('en-IN')); 

//-------------------MATHS---------------------------

// console.log(Math);
// console.log(Math.abs(-4));//convet -ve into +ve
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.6));
// console.log(Math.sqrt(25));

console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.floor((Math.random()*10))+1);

const min =10;
const max= 20;
console.log(Math.floor(Math.random()*(max-min +1)) +min);