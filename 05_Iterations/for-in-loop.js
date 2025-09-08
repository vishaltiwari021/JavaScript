//++++++++++++++++++++++++++++for in looop+++++++++++++++++++

const myObject ={
    game1 : "FFmax",
    game2 : "BGMI",
    game3 : "game of throns",
    game4 : "mine craft"
}
for (const key in myObject) {
    // console.log(key);//by this we get the key of object
    // console.log(myObject[key]);//by this we get he values
    // console.log(`${key} and the of respective value is : ${myObject[key]}`);    
}

//------------------------------------------------------------------------------------

const arr = ["js","py","java","ml","cpp"];

for (const key in arr) {
    //console.log(key); //output:0,1,2,3,4
   // console.log(arr[key]);//output:js,py,java,ml,cpp    
}
//---------------------------------------------------------------------------------------

const map =new Map()
map.set('IN','India');
map.set('UK','United Kingdoam');
map.set('fr','France');

for (const key in map) {
   console.log(key);   
}

//map are  not iterable