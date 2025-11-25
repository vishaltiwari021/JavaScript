//***************************PART02 OF ARRAY***************************

const marvel_heros = ['IronMan','Captain America','Hukl'];
const dc_heros = ['SuperMAn','BatMan','flash'];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros.push(dc_heros));//so here the output is 4 cause it created the nested array,so agins of it return the length of array which is 4
// console.log(marvel_heros);//output:['IronMan','Captain America',Hukl',[ 'SuperMAn', 'BatMan', 'flash' ]]
//---------------------------------------------------------------------------------------------------------------

//Concat Operator:
let hero = marvel_heros.concat(dc_heros);
// console.log(hero);//output:['IronMan','Captain America',Hukl','SuperMAn', 'BatMan', 'flash']
//-----------------------------------------------------------------------------------------------------

//spred operator:

const newHero = [...marvel_heros,...dc_heros];
//console.log(newHero);//output:[ 'IronMan', 'Captain America', 'Hukl', 'SuperMAn', 'BatMan', 'flash' ]
//---------------------------------------------------------------------------------------------------------------

//flaten the array:
 
const arr = [1,2,3,[4,5,6],8,9,[10,11,[12,13]]];
let arr2 = arr.flat(Infinity);
//console.log(arr2);// [1,  2, 3,  4,  5, 6,  8, 9, 10, 11,12, 13]
//------------------------------------------------------------------------------------------------

//Convert the elements,string,objects into Array by doing this:
console.log(Array.isArray("vishal"));//here you asking the que.is the given type is array or not .ANS:false
console.log(Array.from("vishal"));//this convert your string into array:[ 'v', 'i', 's', 'h', 'a', 'l' ]
 let l =200;
 let K= 500;
 let j= 900;
 console.log(Array.of(l,K,j));//this convert the element into array:[ 200, 500, 900 ]
 



