
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
//                     {name:'pizza', isHelthy:false}],
//     sayMyName : function(){
//                  console.log(`my name is ${this.name}`)   //this를 이용해서 같은 오브젝트 내의 name 변수 사용 가능!!!             
//      }
// }
// console.log(obj.name);
// console.log(obj.favoriteMovies[0]);
// console.log(obj.favoritFoods[1]);
// obj.sayMyName();


/**함수**/
function sayHello(name, age){
    console.log(`Hello ${name}, you are ${age} years old`); //`` 사용법!!
}
sayHello('David', '22');

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

/**반복문 : for **/
// for(let i=0; i<30; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     } else if(i % 5 == 0){
//         console.log('5의 배수');
//     }else{
//         console.log('5의 배수가 아니다');
//     }
// }

let array = ['사과', '복숭아', '배'];
for(let i=0; i<array.length; i++){ //array도 오브젝트이다
    console.log(array[i]);
}

//For kids in the group, give them candies.
for (let i of array){// in을 사용하면 인덱스, of사용하면 요소(element)가 바로 콘솔에 출력됨
    console.log(i);
}
for(let i in array){
    console.log(array[i]);
}

// let d = 0;
// for(d; d<5; d++){
//     console.log(d);
// }
// console.log('outside loop d value : '+d);//루프를 빠져나왔을 때 d의 최종값은 5

// for(i=3; i<5; i=i+4){
//     console.log(i);//조건을 만족하는 최초값이 i=3 한번만 출력
// }
let i = 0;
while(i <5){
    console.log('inside while loop');
    i = i+2;
}

let value = 0;
do {
    console.log(value);
    value++;
}while(value < 5);
console.log('바깥', value);