//  Task 1 дано масив [1, 9, 22, 7, 6] додати число 8 після 22
var arr = [1, 9, 22, 7, 6];
arr.splice (3, 0, 8);
console.log (arr);

 // Task 2 написати функцію randomNumber(number) яка наповнює масив випадковими числами від 0 до 100, де number довжина масиву

var arr = [];
for (var i = 0, n = 100; i < n; i++) {
    arr.push(Math.floor(Math.random() * n))
}
console.log(arr);


//Task 3 перевірити чи в масивові є число, яке вводиться через prompt()
var arr = [1,2,3,4, prompt()];
console.log(arr.indexOf(prompt()));


// // Task 4 за допомогою методу forEach знайти найдовше слово в строці lorem

var str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
var arr = str.split(' ');
arr.forEach(function (item, i, arr) {
    arr.sort(function (a, b) {
        return b.length - a.length;
    });
});
console.log(arr[0] + ' - the longest word');


// Task 4 за допомогою методу map створити масив квадратів масиву arr = [8, 6, 12, 10];
var num = [8, 6, 12, 10];
var num1 = num.map(function (num2) {
    return num2 * num2;
});
console.log(num1);