//++++++++++++++++++little More Stuff++++++++++++++++++++++++++++++++++++++

const number  = [1,2,3,4,5,6,7,8,9,10]
let ans = number.map( (num) => num+10 )
// console.log(ans);//  [ 11, 12, 13, 14, 15,16, 17, 18, 19, 20]
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//chaining :-

const myNumber = number.map( (num) => num*10 ).map( (num) => num+1 ).filter( (num) => num>40 )
console.log(myNumber);//[41, 51,  61, 71,81, 91, 101]

//-----------------------------------------------------------------------------------------------

//Working of Reduse method:

const array = [1,2,3];
let initialvalue  = 0 ; 

const myTotal = array.reduce( function (acc,curr) {
    console.log(`acc: ${acc} and curr ${curr}`);
    
    return acc+curr
},0 ) 
// console.log(myTotal);

//by arrow function:
const sumwithinitial = array.reduce( (acc,currvalue) => acc+currvalue,initialvalue )
// console.log(sumwithinitial);//output :6

//-----------------------------------------------------------------------------------

//one more example of real world ::

const shoppingCart = [{
    course:"java development",
    price:2999},
    {
    course:"web development",
    price:3999},
    {
    course:"data Science ",
    price:12999}
]
const  amount = shoppingCart.reduce( (acc,item) => acc+item.price,0 )
console.log(amount);


