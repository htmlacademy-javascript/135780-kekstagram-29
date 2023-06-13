// Функция проверки длины строки
const checkLength = (newString.length <= sizeString) ? true : false;
checkLength;


//Является ли строка палиндромом
let newString = 'Аргентина манит Негра';
let upperCase = newString.toUpperCase();
let replaceAll = newString.replaceAll(' ' , '');
let reversNewString;
let resultReversString = (reversNewString === newString) ? true : false;

reversNewString = upperCase && replaceAll;
reversNewString = Array.from(reversNewString).reverse().join('');

newString = upperCase && replaceAll;


console.log(newString);
console.log(reversNewString);
resultReversString;
