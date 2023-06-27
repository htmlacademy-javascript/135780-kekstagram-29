// Функция проверки длины строки
const lengthCheck = (newString, sizeString) => newString.length <= sizeString;

lengthCheck('ываываыва',10);

//Является ли строка палиндромом
function checkPalindrom(startString) {

  startString = startString.replaceAll(' ', '').toLowerCase();

  const reversString = Array.from(startString).reverse().join('');

  return startString === reversString;

}

checkPalindrom('молом');
//Извлекает все цифры из строки
const getNumber = (str) => {

  if (str !== '') {

    str = String(str);

    if (!str.match(/\d/g) === []){

      const onlyNumber = str.match(/\d/g).join('');

      return onlyNumber;

    }

  }

  return NaN;

};

getNumber('');


// Подсчет рабочего времени


const stringForTime = (timeString) => {
  const [hours, minutes] = timeString.split(':');
  return (hours * 60) + Number(minutes);

};


const timeHowWork = (timeStartWork, timeFinalWork, timeStartMeeting, timeMeetingLong) => {
  timeStartWork = stringForTime(timeStartWork);
  timeFinalWork = stringForTime(timeFinalWork);
  timeStartMeeting = stringForTime(timeStartMeeting);

  return (timeStartMeeting >= timeStartWork) && (timeStartMeeting + timeMeetingLong) <= timeFinalWork;

};

timeHowWork('08:00','17:30','10:00', 100);
