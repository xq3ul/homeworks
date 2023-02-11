//1
var firstNum = Number(prompt ("введите первое число"))
let secondNum = Number(prompt ("введите второе число"))
document.write(calc(firstNum,secondNum))


function calc (a,b){
    if (a<b){
        return a;
    }else return b;
}

console.log(calc(firstNum,secondNum))



// //2
var text = prompt('Напишите что-то');

function i(str) {
    console.log(str.length);
}

i(text);


//3
const num1 = Number(prompt('Первое число'));
const num2 = Number(prompt('Второе число'));
const result = prompt('Что нужно сделать');

function val(a, b, n) {
    switch (n){
        case '+':
            return a + b
        case '-':
            return a - b
        case '*':
            return a * b
        case '/':
            return a / b
    }
}

console.log(val(num1, num2, result));
