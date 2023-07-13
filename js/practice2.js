function multiplication(num){
    for(let i =1; i<10; i++){
        console.log(`${num} * ${i} = ${num*i}`)
    }
}

multiplication(5);

//1부터 30까지 숫자를 돌면서
//3의 배수면 'fizz'
//5의 배수면 'buzz'
//3과 5의 배수면 'fizzbuzz'
//나머지는 그냥 출력
for(let i=1; i<31; i++){
    if(i%3 == 0 && i%5 == 0){
        console.log(`fizzbuzz ${i}`);
    }else if(i%3==0){
        console.log(`fizz ${i}`);
    }else if(i%5 == 0){
        console.log(`buzz ${i}`);
    }else{
        console.log(i);
    }
    
}