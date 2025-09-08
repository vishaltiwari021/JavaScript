//There are mainly two type of data-type 1) Primitive 2)Non-primitive

//Primitive are 7 types: String,Number,Boolean,null,undefine,Symbol,bigInt

const value =33 ;
const newvalue = 33.78;
let name = "bishal";
let boolean = true;
const user_ID = null;//type =>object 
let mail;//type=>undefined
let  id = Symbol('756')   
let  anotherid = Symbol('756') 
console.log(id === anotherid);  //false internaly both are different 

const bigNumber = 123456789987654321234n;
console.log(typeof bigNumber);

//Non-primitive(Reference Type) : Array,Objects,Functions

//what is the type of JS Static/Dynamic??

const heros = ["ironman","hanuman ji","indra-dev"];

let myObj = {
    naem:"vishal",
    age:20,
};

const myFunction = function(){
    let a = 2+2;
    console.log(a);
}

