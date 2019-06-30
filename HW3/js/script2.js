 // task 1
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
console.log(titleCase(arr1));  //each word with a capital letter




var arr1 = ['Lorem', 'ipsum', 'is', 'simply', 'dummy'];
for (var arr of arr1) {
    // console.log(arr);
}

var tmp = '';
for (var arr of arr1) {
    if (arr[0] == arr[0].toUpperCase()) {
        tmp += arr;
    }
}
console.log(tmp);






 // task 3
var result = String('first string', 'Second one');
function String(str1, str2) {

    return (str1.length > str2.length) ? str1 : str2;
}

console.log(result);