//++++++++++++++++++++++++Control Flow of code +++++++++++++++++++++++++++++

//if:
// const temp = 45; 
// if(temp>44){
//     console.log("hot day")
// }else{
//     console.log("not to much hot day")
// }
//-----------------------------------------------------------
// const score = 200;
// if(score>100){
//     let power = "fly";
//     console.log(`User Power :${power}`)
// }
//------------------------------------------------------------
const userLoggedIn = true;
const userDebotcard =true;
const userGoogleLoggedIn = false;
const userMainLoggedIn  =true;
if(userLoggedIn&&userDebotcard){
    // console.log("purchase ");
}
if(userMainLoggedIn || userGoogleLoggedIn){
    // console.log("logged in ");
}
//-----------------------------------------------------------------

//++++++++++++++++++++++++++++++++++++++++++ SWITCH CASE +++++++++++++++++++++++++++++++++++++++

// switch (key){
//     case value:
//         break;
//     case value:
//         break;
//     default:
//         break;
// }

const month =3;
switch (month){
    case 1:
        console.log("january")
        break;
    case 2:
        console.log("feburary")
        break;
    case 3:
        console.log("march")
        break;
    case 3:
        console.log("april")
        break;
    default:
        console.log("default case not match")
        break;
}
//**********************************Truthy and Falsy values***********************************

const userEmain ="vihsal@ gamil.com";
if(userEmain){
    console.log("got thre useremail");
}else{
    console.log("do not got useremail");
}

//falsy values :

//false,0,-0,BigInt 0n,"",Nan,null,undefine

//truthy values:-

//"0","false",[],{},function(){}," "

if(userEmain.length===0){
    console.log("array is empty")
}

const emptyObject = {}

if(Object.keys(emptyObject).length === 0){
    console.log("array is empty")
}
// *******************************************************************************************************
 // Nullish Coalescing Operator (??) all the thing are around between(null and undefine):

//  let val1 = 5??10//output:5
//  let val1 = null??10//output:10
//  let val1 = undefined??10//output:10
//  let val1 = null??5??10//output:5
//  console.log(val1)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Terninary:
//Condition ? true:false