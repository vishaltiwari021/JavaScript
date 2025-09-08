// What is memory and its types and
//Stack(Primitive data-types are used this memory ) , Heap(Non-primitive data-types are used this memory)
//Stack memory returns the copy of variable 
//heap memory returns the reference(original value)
 let myName = "vishaltiwari";
 let petName = myName;
 petName = "pandit ji";
 console.log(myName)
 console.log(petName);

 //Reference 
 let userOne ={
    name:"vishal",
    mail:"tiwri@gmail.com",
 }
    
  let userTwo = userOne
  userTwo.mail ="thtuh@gjkbsk";

  console.log(userOne);
  console.log(userTwo);