//++++++++++++++++++++++For OF Loop++++++++++++++++++++

//for of loop:

const arr = [1,2,3,4,5,6,67]
for (const num of arr) {
   // console.log(num);  
}
//----------------------------------------------

//Maps:

const map =new Map()
map.set('IN','India');
map.set('UK','United Kingdoam');
map.set('fr','France');
// console.log(map);

for (const [key,value] of map) {//here we destruter an array.
    console.log(key ,':-',value);    
}
//----------------------------------------------------------------------

const myObject ={
    game1 : "FFmax",
    game2 : "BGMI"
}
for (const key of myObject) {
   // console.log(key);//TypeError: myObject is not iterable
    
}
//By the use of forof loop we can not iterare on the objects... for we use  the forin loop check in next file(forin).. 

