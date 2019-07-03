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

 var str = ['lorem', 'ipsum', 'is', 'simply', 'dummy'];
 var arr1 = [];
 str.forEach(function (item) {
     arr1.push(item[0].toUpperCase() + item.slice(1));
 });
 console.log(arr1.join(' '));



 //  task 3
 var result = String('first string', 'Second one');

 function String(str1, str2) {

     return (str1.length > str2.length) ? str1 : str2;
 }

 console.log(result);