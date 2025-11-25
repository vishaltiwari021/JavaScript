//++++++++++++++++++++++++for each loop++++++++++++++++++++++++++++++

const arr = ["js","py","java","ml","cpp"];


// arr.forEach( function (item) {
//     console.log(item);
    
// })

// arr.forEach( (val) => {
//     console.log(val);
    
// })

// function printMe(item){
//     console.log(item);
// }

// arr.forEach(printMe);

// arr.forEach( (item,index,arr) =>{
//     console.log(item,index,arr);
    
// } )

const myCoding = [{
    language:"javaScript",
    languageFileName:"js"
    },
    {
    language:"java",
    languageFileName:"java"
    },
    {
    language:"python",
    languageFileName:"py"
    },
]

// myCoding.forEach( (item) =>{
//     console.log(item.languageFileName);
    
// } )

// foreach loop kuch bhi return nhi karta hai:

 const object  = arr.forEach( (value) =>{
    console.log(value);
    return value;//undefined
 } )
 console.log(object);
 
