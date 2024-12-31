const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const counterlabel = document.getElementById("counterlabel");
let count = 0;


increase.onclick = function(){
    count++;
    counterlabel.textContent = count;
}

decrease.onclick = function(){
    count--;
    counterlabel.textContent = count;
}

reset.onclick = function(){
    count = 0;
    counterlabel.textContent = count;
}