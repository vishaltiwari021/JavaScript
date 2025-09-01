// What is memory and its types and
//Stack(Primitive are use this memory ) , Heap(Non-primitive are use this memory)
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