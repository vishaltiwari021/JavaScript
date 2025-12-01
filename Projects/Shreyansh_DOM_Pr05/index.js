let isStatus  = document.querySelector("h3")
let addFriend  = document.getElementById("add");
let flag = 0;

 addFriend.addEventListener("click",function(){
        if(flag==0){
            isStatus.innerHTML = "friend";
            isStatus.style.color = "green";
            addFriend.innerHTML = "Remove";
            flag = 1;
        }
        else{
            isStatus.innerHTML = "Stranger";
            isStatus.style.color = "red";
            addFriend.innerHTML = "AddFriend";
            flag = 0;
        }
})