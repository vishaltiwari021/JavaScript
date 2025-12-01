//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//promise is an Object in js representing the eventual completion or failure of an async operations.

//Creation of  promises in JavaScript...... || promise m callback function likhna hota hai
const promiseOne = new Promise(function(resolve,reject){
    //Do an async task like:
    // DB call ,cryptography ,networkcall
    setTimeout(function(){
        console.log("async task i done");
        resolve(); //if here  i donot wrote the resolve() so the then function is not run,
    },1000)
})
//consumption of promise:
promiseOne.then(function(){//then ka direct relation hai resolve k sath
    console.log("consumed the promise"); 
}) 
//-------------------------------------------------------

new Promise(function(resolve,reject){
   setTimeout(function(){
     console.log("Async rask 2");
     resolve()
   },1000)
}).then(function(){
    console.log("comsumid task 2");
    
})
//------------------------------------------------------------------------

const  promiseThird  = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"vishal",email:"vishal@gmail,com"})
    },1000)
})
promiseThird.then(function(user){
    console.log(user);//output:{ username: 'vishal', email: 'vishal@gmail,com' }
    
})
//------------------------------------------------------------------------------------------

const promiseFourth  =  new Promise((resolve,reject) =>{
    setTimeout(function(){
        let error  = true;
        if(!error){
            resolve({username:"vishal",password : "123"})
        }else{
            reject('ERROR :Something went wrong')
        }
    },1000)
})

promiseFourth.then((user) =>{
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
})
.finally(() => console.log("the promise is either resolve or not"))
//-----------------------------------------------------------------------------------

const promiseFive  =  new Promise((resolve,reject) =>{
    setTimeout(function(){
        let error  = true;
        if(!error){
            resolve({username:"tiwari",password : "123"})
        }else{
            reject('ERROR : JS went wrong')
        }
    },1000)
})

//async is like a then and catch || ye thodi der wait karta hai kam ko honeka uske badh next step leta hai.
async function cnsumeproisefive() {
    try {
        const response  = await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
    
}
cnsumeproisefive()
//---------------------------------------------------
// async function getAllUsers() {
//     try {
//        const response = await fetch('https://jsonplaceholder.typicode.com/users')
//        const data  = await response.json();
//        console.log(data); 
//     } catch (error) {
//         console.log("E :", error);
        
//     }
// }
// getAllUsers()
//doing above thing using them&catch..

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    return response.json();

})
.then((data) =>{
    console.log(data);
    
})
.catch((error)=> console.log(error)
);