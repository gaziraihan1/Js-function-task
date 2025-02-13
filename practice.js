// Task one
function multiplyTask(num1,num2,num3,num4){
    let result = num1*num2*num3*num4;
    console.log(result);
    return result;
}
multiplyTask(3,5,6,7);


//Task 2
function checkEven(num) {

    let mulitple = 2;
        if(num % 2 === 1){
            mulitple = mulitple * num;
            console.log(mulitple);
        }
        else if(num % 2 === 0) {
            mulitple =  num /mulitple ;
            console.log(mulitple);
        }
    return mulitple;
};
let num =  6;
checkEven(num);


//Task 3
function make_avg(numbers) {
    let count = 0;
    for(let i =0; i <numbers.length; i++) {
        count++;
    }
    return count;
};
const checkAvg = [34,43,3,4,5,55];
const checkAvgFunc = make_avg(checkAvg);
console.log(checkAvgFunc);


//Task 4
function count_zero(numbers) {
    let count = 0;
    for(let i = 0; i <numbers.length; i++) {
        if(numbers[i] === '0'){
            count++;
        }
    }
    return count;
}
const numbers = '000101110101';
const countZero = count_zero(numbers);
console.log(countZero);


//Task 5
function odd_even(numbers) {
    let result;
        if(numbers % 2 === 0) {
            result = 'Even';
            return result
        }
        else{
            result = 'Odd';
            return result
        }
};
const number = 14;
const oddeven = odd_even(number);
console.log(oddeven);

