let counting = document.getElementById("counting");
let minusbutton = document.getElementById("minusbutton");
let plusbutton = document.getElementById("plusbutton");
let resetbutton = document.getElementById("resetbutton");

let counter = 0;

function plusbtn(){
    counter = counter+1;
    counting.textContent = counter;
}

function minusbtn(){
    counter = counter-1;
    counting.textContent = counter;
}


function resetbtn(){
    counter = 0;
    counting.textContent = counter;
}

