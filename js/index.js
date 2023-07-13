
// var :  variable,,변수
// const : constant,,  변수 선언할 때 사용함, 재할당 안됨
// let : 변수 처음에 선언할 때만 let 붙임
// 자바스크리브는 위에서부터 순차적으로 읽어들임

let date = new Date();
let hour = date.getHours();

if(hour < 11){
    console.log("오전입니다");
}
else if(hour < 15){
    console.log('점심입니다');
}
else{
    console.log('저녁입니다');
}

let a = 50;

switch (a % 49){
    case 0:
        console.log('짝수');
        break;
    case 1 :
        console.log('홀수');
        break;
    default:
        console.log('숫자가 아님');
        break;
}

//let input = prompt('숫자를 입력하세요 : ');
// let input = Number(prompt('숫자를 입력하세요 : ', '숫자'));
//                                                 // placeholder

// console.log(typeof(input));

// switch(input % 2) {
//     case 0:
//         console.log('짝수');
//         break;
//     case 1:
//         console.log('짝수');
//         break;
//     default:
//         console.log('숫자가 아님');
//         break;
// }




// let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday',
//                     'Thursday', 'Friday', 'Saturday', 'Sunday', 
//                         54, true, [1, 2]];

// console.log(daysOfWeek[1]); //Tuseday 출력

// let obj = {
//     name: 'Shin', //key값은 변수 형태로 들어감
//     age : 28,
//     isMarried : false,
//     favoriteMovies : ['Elemental', 'Spiderman'],
//     favoritFoods : [{name:'hamburger',isHealthy : false},
//                     {name:'pizza', isHelthy:false}]
// }
// console.log(obj.name);
// console.log(obj.favoriteMovies[0]);
// console.log(obj.favoritFoods[1]);


/**함수**/
function sayHello(name){
    console.log('Hello', name);
}
sayHello('David');

// function addNum(a, b){
//     console.log(a+ b);
// }
// addNum(2, 3);

// let result = addNum(2, 3);
// console.log(result);//undefined

function addNum(a, b){
    return a + b;
}
let result = addNum(2, 3);
console.log(result);//5

let obj = {
    name: 'Shin',
    age : 28,
    sayHello2 : function(){return 'Hello2';}
}

console.log(obj.sayHello2()); //console 자체도 object임
obj.sayHello2();