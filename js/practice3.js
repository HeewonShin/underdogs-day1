

let title = document.getElementById('title');

// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = 'green';


// function handleClick(){
//     let currentColor = title.style.color;
//     if(currentColor == BASE_COLOR){
//     title.style.color = OTHER_COLOR;
//     }else{
//     title.style.color = BASE_COLOR;
//     }
// }
// title.addEventListener("mouseenter", handleClick);

//컬러가 4개 이상 들어가있는 배열을 만들고
//특정 이벤트를 통해 랜덤으로 컬러가 선택되도록 만들어보기
let colorChart = ['orange', 'coral', 'cornflowerblue', 'hotpink'];

function randomColor(){

    title.style.color= colorChart[Math.floor(Math.random()*4)];
}

title.addEventListener('click', randomColor);




