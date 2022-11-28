





let oddNo = document.getElementsByClassName("container33");
let evenNo = document.getElementsByClassName("container22");

let first = document.getElementsByClassName("container1")[0];
let last = document.getElementsByClassName("container17")[0];
let second = document.getElementsByClassName("container9")[0];
second.style.backgroundColor = "green";
last.style.backgroundColor = "red";
first.style.backgroundColor = "blue";

for(let i = 0; i<evenNo.length; i++){
    evenNo[i] = evenNo[i].style.backgroundColor = "lime";
}

for(let i = 0; i<oddNo.length; i++){
    oddNo[i] = oddNo[i].style.backgroundColor = "aliceblue";
}







