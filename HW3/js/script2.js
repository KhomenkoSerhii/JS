// // task 1
var min = 10,
    max = 20;
var r = Math.floor(Math.random() * (max - min + 1)) + min;

function getNumber(min, max) {
    if (r % 2 == 0) {
        return ('pair number');
    } else {
        return ('not a pair number');
    }
}
console.log(getNumber());



//  task 2

var arr = ['lorem', 'ipsum', 'is', 'simply', 'dummy'];
var arr1 = arr.join(' ');
function titleCase(str) {

    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}

console.log(titleCase(arr1));


// // task 3

function String(str1, str2) {

    return (str1.length > str2.length) ? str1 : str2;
}
var result = String('first string', 'Second one');
console.log(result);