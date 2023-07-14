
// var :  variable,,변수
// const : constant,,  변수 선언할 때 사용함, 재할당 안됨
// let : 변수 처음에 선언할 때만 let 붙임
// 자바스크리브는 위에서부터 순차적으로 읽어들임

// let date = new Date();
// let hour = date.getHours();

// if(hour < 11){
//     console.log("오전입니다");
// }
// else if(hour < 15){
//     console.log('점심입니다');
// }
// else{
//     console.log('저녁입니다');
// }

// let a = 50;

// switch (a % 49){
//     case 0:
//         console.log('짝수');
//         break;
//     case 1 :
//         console.log('홀수');
//         break;
//     default:
//         console.log('숫자가 아님');
//         break;
// }

// //let input = prompt('숫자를 입력하세요 : ');
// // let input = Number(prompt('숫자를 입력하세요 : ', '숫자'));
// //                                                 // placeholder

// // console.log(typeof(input));

// // switch(input % 2) {
// //     case 0:
// //         console.log('짝수');
// //         break;
// //     case 1:
// //         console.log('짝수');
// //         break;
// //     default:
// //         console.log('숫자가 아님');
// //         break;
// // }




// // let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday',
// //                     'Thursday', 'Friday', 'Saturday', 'Sunday', 
// //                         54, true, [1, 2]];

// // console.log(daysOfWeek[1]); //Tuseday 출력

// // let obj = {
// //     name: 'Shin', //key값은 변수 형태로 들어감
// //     age : 28,
// //     isMarried : false,
// //     favoriteMovies : ['Elemental', 'Spiderman'],
// //     favoritFoods : [{name:'hamburger',isHealthy : false},
// //                     {name:'pizza', isHelthy:false}],
// //     sayMyName : function(){
// //                  console.log(`my name is ${this.name}`)   //this를 이용해서 같은 오브젝트 내의 name 변수 사용 가능!!!             
// //      }
// // }
// // console.log(obj.name);
// // console.log(obj.favoriteMovies[0]);
// // console.log(obj.favoritFoods[1]);
// // obj.sayMyName();


// /**함수**/
// function sayHello(name, age){
//     console.log(`Hello ${name}, you are ${age} years old`); //`` 사용법!!
// }
// sayHello('David', '22');

// // function addNum(a, b){
// //     console.log(a+ b);
// // }
// // addNum(2, 3);

// // let result = addNum(2, 3);
// // console.log(result);//undefined

// function addNum(a, b){
//     return a + b;
// }
// let result = addNum(2, 3);
// console.log(result);//5

// let obj = {
//     name: 'Shin',
//     age : 28,
//     sayHello2 : function(){return 'Hello2';}
// }

// console.log(obj.sayHello2()); //console 자체도 object임
// obj.sayHello2();

// /**반복문 : for **/
// // for(let i=0; i<30; i++){
// //     if(i % 2 == 0){
// //         console.log(i);
// //     } else if(i % 5 == 0){
// //         console.log('5의 배수');
// //     }else{
// //         console.log('5의 배수가 아니다');
// //     }
// // }

// let array = ['사과', '복숭아', '배'];
// for(let i=0; i<array.length; i++){ //array도 오브젝트이다
//     console.log(array[i]);
// }

// //For kids in the group, give them candies.
// for (let i of array){// in을 사용하면 인덱스, of사용하면 요소(element)가 바로 콘솔에 출력됨
//     console.log(i);
// }
// for(let i in array){
//     console.log(array[i]);
// }

// // let d = 0;
// // for(d; d<5; d++){
// //     console.log(d);
// // }
// // console.log('outside loop d value : '+d);//루프를 빠져나왔을 때 d의 최종값은 5

// // for(i=3; i<5; i=i+4){
// //     console.log(i);//조건을 만족하는 최초값이 i=3 한번만 출력
// // }
// let i = 0;
// while(i <5){
//     console.log('inside while loop');
//     i = i+2;
// }

// let value = 0;
// do {
//     console.log(value);
//     value++;
// }while(value < 5);
// console.log('바깥', value);


/**배열 메서드**/

// let arr = [1, 2, 3, 'hello'];
// arr.reverse();

// console.log(arr);
// //push, pop, sort, split 등이 있다


// function canEnter(gender, age){
//     if(gender == 'female' && age >25){
//         return true;
//     }
//     return false;
// }

// console.log(canEnter('male', 30));



// let title = document.getElementById('title');
// console.log(title.style);

// title.style.color = 'red';
// console.log(title.style.color);

// document.title = 'DOM Practice';//document 또한 키:밸류로 이루어진 오브젝트 구조이다

// title = document.querySelector('#title');
// title.style.color = 'orange';
// title.innerHTML = 'Hello Javascript';

// /*이밴트리스너*/


// // function notifyResize(){
// //     let width = window.innerWidth;
// //     let height = window.innerHeight;
// //     console.log(width, height);
// // }

// //window.addEventListener("resize", notifyResize);
// //감지할 이벤트, 실행할 함수명,, 참고로 함수명 뒤에 괄호를 붙이면 함수 실행이 resize 하지 않아도 우선 한 번 실행됨


// /** 오프라인 1차 - 7월 14일 */
// //DOM 구조 : 브라우저에서 보는 모든 것에 접근할 수 있다

// title = document.querySelector('#title');

// const colors = ['red', 'blue', 'green', 'yello', 'pink'];

// function generateRandomNumber(){
//    return  Math.floor(Math.random() * colors.length);
// }

// function changeColor(){
//     let index = generateRandomNumber();
//     title.style.color = colors[index];
// }
// title.addEventListener('click', changeColor);

let data = [
    {회원번호:0, 아이디:'red', 성별:'남자', 나이:21},
    {회원번호:1, 아이디:'yello', 성별:'남자', 나이:17},
    {회원번호:2, 아이디:'orange', 성별:'여자', 나이:16},
    {회원번호:3, 아이디:'green', 성별:'여자', 나이:55}
]

for(let i=0; i<data.length; i++){
    if(data[i].나이 >= 20 && data[i].성별 == '여자'){
        console.log('회원번호 :', data[i].회원번호);
    }
}

// for(let element of data){
//     if(element.gender === '여자' && element.나이 > 20){
//         console.log('회원번호 :', data[i].회원번호);
//     }
// }