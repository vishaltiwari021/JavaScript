//*************************************Scopes***************************************************

//{} this curly braces are the scope

// var a =3; generaly we are not using the var in the JS
let a=5;// global scope
const y = 6;//global scope

//this peice of code is block scope:- which is written in the {}
 if(true){
    let y=8
    const a =3
    // console.log("Inner :" , a)
 }
//  console.log("Outer :",a)
 //Scopes are different in windows and nodejs:-

 //nested Scope

    function one(){
        const username  ="vishal";

        function two(){
            const website ="heleo.com";
            console.log(username);
        }
        // console.log(website);// this shows :ReferenceError: website is not defined
        two()
    }
    one()

if(true){
    let username = "vishal";
        if(username==="vishal"){
            const website  = "google.com"
           console.log(username+website);
        }
       // console.log(website)// this shows :ReferenceError: website is not defined
}
// console.log(username) //this shows error :ReferenceError: username is not defined cause this is from out of scope.

//++++++++++++++++++++++++++++Interesting++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addOne(5))

function addOne(num){
    return num+1;
}

// console.log(addTwo(3))//this give's the error :ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function(num){
    return num+2;
}
//we will see this in next part...........