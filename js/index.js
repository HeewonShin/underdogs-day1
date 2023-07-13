
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



