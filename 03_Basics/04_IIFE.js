//+++++++++++++++++++Imemediately Invoked Function Expression+++++++++++++++++++++++++++

//globle scope se pollution hoti hai kai bar to uske pollution ko hatane k liye ham IIFE ka use krte hai.

(function chai(){
    console.log(`DATABASE CONECTED`);
})();

(  (name) => {
    console.log(`DATABASE TWO CONNECTED ${name}`)
})('vishal')