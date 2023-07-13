

let title = document.getElementById('title');

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = 'green';


function handleClick(){
    let currentColor = title.style.color;
    if(currentColor == BASE_COLOR){
    title.style.color = OTHER_COLOR;
    }else{
    title.style.color = BASE_COLOR;
    }
}
title.addEventListener("click", handleClick);