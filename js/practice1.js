

//1.
//오브젝트 내에 인자(argument)를 받는 함수를 만들어서
//짝수인지 홀수인지 판별하시오.

let obj = {
    input : prompt('숫자를 입력하세요'),
    oddEvenCheck : function(){
        if(this.input % 2 == 0){
            console.log('짝수');
        }else{
            console.log('홀수');
        }
    }
}
obj.oddEvenCheck();


//2.
//배열내 최대값 찾기
//배열(array)을 인자(argument)로 받는 함수를 만들어서
//그 배열의 최대값을 반환해보시오.

let array = [1,2,3,4,5]
let max = array[0]
function numberCheck(array){
    for(let i=0; i<array.length; i++){
        if(array[i] > max){
            max = array[i];
        }
    }
}
console.log('최대값 : ', max);

function returnMaxNumber(arr){
    maxNum = -100;
    for(num of arr){
        if(num> maxNum){
            maxNum = num;
            console.log('최대값: ', maxNum);
        }
    }
    return maxNum;
}
console.log(returnMaxNumber([1, 2, 55, 77]))