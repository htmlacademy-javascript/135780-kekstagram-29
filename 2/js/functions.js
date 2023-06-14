// Функция проверки длины строки
const checkLength = (newString.length <= sizeString);
checkLength;

//Является ли строка палиндромом
newString = newString.replaceAll(' ','').toLowerCase();
reversNewString = Array.from(newString).reverse().join('');
const resultReversString = (reversNewString === newString);

//Извлекает все цифры из строки
let str = '234'; 
str = String(str);
const b = str.match(/\d/g).join('');
