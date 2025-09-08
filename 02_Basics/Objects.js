//******************************Objects****************************

//We can declare the JS in two way 1)literals 2)Constructor
//here is the term called singleton : when we make the constructor object it's make as the singleton(ek hi object hai.)
//when we make the object by using literals no singleton is form while in constructor it happen.
//-------------------------------------------------------------------------------------------------------------------

//Decleration of Object:
//1) Object Literals-:

const mySbl = Symbol("tiwari");

const JsUser = {
    name:"vishal",
    age:21,
    email:"vishal@google.com",
    location:"Mathura",
    isLoggedIN:false,
    lastLoggedInDay:["moanday","sunday"],
    [mySbl]: "tiwari",

}

//console.log(JsUser.name);//this how we acces the value of object.Mostly use this way to acces the values.
// console.log(JsUser["name"]);//this use in some cases to acces value.
// console.log(JsUser[mySbl]);

JsUser.email = "vishal@gpt.com";
//Object.freeze(JsUser);//by using this you freeze your object mean's no changes occurs after freezing the object.
JsUser.email = "vishaltiwati@gamil.com";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello Js user ")
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`hello Js user , ${this.name}`)//jab hamko same object ko reference krna hai tab "this" use krte hain
}
console.log(JsUser.greetingTwo());
console.log(JsUser);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


