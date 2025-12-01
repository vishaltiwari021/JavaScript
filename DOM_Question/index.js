// const a  = document.querySelector("#heading")

// a.addEventListener("click",()=>{
//     a.innerHTML="hihiihihihih";
//     a.style.color="pink";
//     a.style.backgroundColor = "black";
// })
//---------------------------------------------------------------
const bulb = document.querySelector("#bulb");
const btn = document.querySelector("button");
let flag  =0 ;

btn.addEventListener("click",function(){
    if(flag==0){
        bulb.style.backgroundColor="yellow";
        flag = 1;
    }
    else{
        bulb.style.backgroundColor="white";
        flag = 0;
    }
})