//+++++++++++++++++++Imemediately Invoked Function Expression+++++++++++++++++++++++++++

//globle scope se pollution hota hai kai bar to uske pollution ko hatane k liye ham IIFE ka use krte hai.

(function chai(){
    console.log(`DATABASE CONECTED`);
})();

(  (name) => {
    console.log(` ${name} DATABASE TWO CONNECTED `)
})('vishal')