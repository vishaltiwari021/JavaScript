//*******************************************Arrow Function*************************************************

const user  = {
    name : "vishal",
    price : 3435,
    welcomeMessage: function(){
        console.log(`${this.name}, welcome back to our site`);
        // console.log(this)//this provide us the current context
    }
}
// console.log(user);

// user.welcomeMessage()//output:-vishal, welcome back to our site
// user.name ="tiwari"//output:-tiwari, welcome back to our site
// user.welcomeMessage()
// console.log(this)// here we print the (this) output is :{} only empty object...

//----------------------------------------------------------------------------------------

// function chai(){
//     let name = "vishal"
//       console.log(this.name)//this shows us an : undefined. Cause we can't exces the properties/functionality of(this) inside the fucntion.
// }
// chai()
// //-----------------------------------------------------------------------------------------------------------------------
//Decklaration of arrow functions:-

const addTwo = (num1,num2) =>{
    return num1+num2;
}
console.log(addTwo(5,7))

//implicit returns arrow function:-

// const addthree = (num3,num4) => (num3+num4)//here we donot need to write return..
const addthree = (num3,num4) => ({userNmae:"vishal TIwari"})//this how we return an object in fucntion..
console.log(addthree(6,7))