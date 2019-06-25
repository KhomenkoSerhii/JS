var result = prompt("Input your digit", 0);
if (result > 0) {
    console.log('1');
} else if (result < 0) {
    console.log('-1');
} else {
    console.log('0');
}


// Practice
var result = prompt('input', 0);
switch (result) {
    case '1':
        console.log('a');
        break;
    case '2':
        console.log('b');
        break;
    case '3':
        console.log('c');
        break;
    default:
        console.log('z');
}


// вивести в консоль за допомогою циклу квадрати чисел від 1 до 9
// for (var i = 1; i < 10; i++) {
//     console.log(i * i);
// }

var num = ' ';
for (i = 1; i <= 9; i++) {
    num += i * i + ' ';
}
console.log(num);

// вивести в консоль за допомогою циклу квадрати чисел від 1 до 9 за допомогою while
// var i = 1;
// while (i < 10) {
//     console.log(i * i);
//     i++;
// }

var num = '';
var i = 1;
while (i < 10) {
    num += i * i + ' ';
    i++;
}
console.log(num);


// ● функція приймає два параметри(числа) і повертає більший з них
function calc(number1, number2) {
    return (number1 > number2) ? number1 : number2;
}
var result = calc(20, 6);
console.log(result);
