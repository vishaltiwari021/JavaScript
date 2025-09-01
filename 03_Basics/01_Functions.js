//*************************Functions****************************************

console.log("Starting the functions::")

//function => is the keyword then sayMyName is the function name and in{} this the function defination..

function sayMyName(){
    console.log("hello vishal");
    console.log("hello vishal");
    console.log("hello vishal");
    console.log("hello vishal");
    console.log("hello vishal");
    console.log("hello vishal");
}
//sayMyName()//this is the function execution.

// function addTwoNumbers(number1,number2){//in(parameter1,parameter2) 
//     console.log(number1+number2)
// }
//------------------------------------------------------------------------------
function addTwoNumbers(number1,number2){//in(parameter1,parameter2) 
    let result = number1+number2;
    return result;
}

const result  = addTwoNumbers(2,4);//in(arguments1,arguments2)

// console.log(result)
//---------------------------------------------------------------------------------

function loginUserMessage(username = "hera"){
    return `${username} just logged in`
}
//console.log(loginUserMessage("vishal"))//vishal just logged in
//console.log(loginUserMessage())//result will be : undefined just logged in.

//json formate's :
//  1){
//     "name ":"vishal",
//     "age":67,
//     "location":"afgra"
//     ...etc
// }

// 2)[
//     {},{},{}
// ]

//*******************************************************************************************************

//shoping card problem: custom add's multiple item in the cart then how to tacle this

function calculateCartPrice(...num1){//rest operator
    return num1;
}
//console.log(calculateCartPrice(200,4556,78,8,53,32,344)) //it return's an array :[200, 4556, 78,8,   53, 32,344]


const user ={
    name:"vishal",
    age:45,
    location:"kanpur",
    ocupation:"student"
}
function handle(anyObject){
    console.log(`Username is ${anyObject.name} and age ${anyObject.age}`)
}
handle(user);

const newArray = [233,556,788,3345,345];

function returnArray(getArray){
    return getArray[3]
}
console.log(returnArray(newArray));