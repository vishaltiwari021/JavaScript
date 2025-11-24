//Arrays : are the object in JS 

//Array declerations:

const arr = [1,2,3,4,5,7];
const arrString = ['vishal','tiwari','sharma'];
const arr2 = new Array(1,2,3,45,6,7,8);

// console.log(arr2);

//Array Methods::

arr.push(10);// add the value at last of array.
arr.pop()//remove the last value from an array.
// console.log(arr);
const newArr = [23,45,67,89,100,12,23,];
newArr.unshift(1);//add value at the '0 index' in the array.
newArr.shift();//remove value of the '0 index' from the array.
// console.log(newArr);

// console.log(arr.includes(9));
// console.log(arr.indexOf(5));
 const freshArr = arr.join()//join makes array to string. example:
//  const fruits = ['Apple', 'Banana', 'Cherry'];
// console.log(fruits.join(' - ')); // Output: "Apple - Banana - Cherry"
//  console.log(arr)
//  console.log(freshArr)
//  console.log(typeof freshArr)

//Slice ,Splice::

console.log(" A" , arr);

const myarray = arr.slice(1,3);//exclude the first value but not last
console.log(myarray);

console.log("B ", arr);

const myarr3  = arr.splice(1,3)//break the array from the provided index
console.log("C ",arr);

console.log(myarr3)

