//***********************************ObjectPart02*******************************

//Singleton Object are make using the help of Constructor..
const tinderuser  =new Object();// this is an singleton object
tinderuser.id= "234vthtr";
tinderuser.name="lalit";
tinderuser.isLoggedIn = false;
// console.log(tinderuser);

const instagramUser = {
    eamil:"tiwari@.com",
    fullNamme:{
        userfullName :{
            firstName:"vishal",
            lastName: "Tiwari",
        },
    },
    mobileNUmber:"987654365"
}
// console.log(instagramUser.fullNamme.userfullName.lastName);
//++++++++++++++++++++++++++++++Combining of Objects+++++++++++++++++++++++++

let obj1 = {1:"a",2:"r",3:"j"};
let obj2 = {5:"y",6:"i",9:"b"};
let obj = Object.assign({},obj1,obj2);//this is how we can combine our object
console.log(obj);
let obj3 = {...obj1,...obj2};//this is how we can also combine our object
console.log(obj3)
// console.log(tinderuser);
// console.log(Object.keys(tinderuser));//[ 'id', 'name', 'isLoggedIn' ] the data type is array
// console.log(Object.values(tinderuser));//[ '234vthtr', 'lalit', false ] the data type is array
// console.log(Object.entries(tinderuser));//[ [ 'id', '234vthtr' ], [ 'name', 'lalit' ], [ 'isLoggedIn', false ] ]
// console.log(tinderuser.hasOwnProperty('isLoggedIn'));//return true

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
