//generate a random color 
const randomColor = function(){
    const hex  = "0123456789ABCDEF";
    let color  ="#";
    for(let i = 0 ; i< 6 ;i++){
        color += hex[Math.floor(Math.random()*16)] ;
    }
    return color;
}
let intervalID;
const startChaningColor = function(){
    if(!intervalID){
    intervalID = setInterval(changeBGColor,2000)}
    function changeBGColor(){
        document.body.style.backgroundColor = randomColor();
    }
    
}
const stopChaningColor = function(){
    clearInterval(intervalID);
    intervalID = null;
}
document.querySelector('#start').addEventListener('click',startChaningColor)
document.querySelector('#stop').addEventListener('click',stopChaningColor)
console.log(randomColor());
