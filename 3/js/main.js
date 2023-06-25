/*
  id: '', //id фотографии от 1 до 25 (без повторов)
  url: '', // адрес картинки photos/__.jpg, __ - от 1 до 25 (без повторов)
  description: '', //описание фотографии
  likes: '', // число лайков от 15 до 200
  comments: '', // массив, список комменатриев од 0 до 30 штук (рандомно)
  Пример рандома комента
 {
  id: 135, // уникальный
  avatar: 'img/avatar-6.svg', // рандом фото от 1 до 6
  message: 'В целом всё неплохо. Но не всё.', // 1 или 2 случайных предложения из примера
  name: 'Артём', // рандомные именна, придумай сам
}
  */

//Объект имен для комментариев
const NAMES = [
  'Ирина',
  'Василий',
  'Пётр',
  'Галлина',
  'Зинаида',
  'Макар',
  'Радомир',
  'Владимир',
];
// Список комментариев
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

//Описание фотографии
const DESCRIPTIONS = [
  'Дома',
  'На работе',
  'Упс',
  'Как-то так',
];

const MAX_PHOTOS = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENT = 0;
const MAX_COMMENT = 30;
const MIN_AVATAR = 1;
const MAX_AVATAR = 6;

// Рандомайзер
function getRandomInteger(a, b) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];
// создание комментатора
const COMMENTATOR = () => {
  const result = [];
  for (let i = 0; i < getRandomInteger(MIN_COMMENT, MAX_COMMENT); i++) {
    result.push({
      id: i + 1,
      avatar: `img/avatar-${getRandomInteger(MIN_AVATAR,MAX_AVATAR)}.svg`,
      message: getRandomArrayElement(MESSAGES),
      name: getRandomArrayElement(NAMES)
    });
  }
  return result;
};

const newPhotos = (photos) => {
  const result = [];
  for (let i = 0; i < photos; i++) {
    result.push({
      id: i + 1,
      url: `photos/'${(i + 1)}.jpg`,
      description: getRandomArrayElement(DESCRIPTIONS),
      likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
      comments: COMMENTATOR()
    });
  }
  return result;
};

newPhotos(MAX_PHOTOS);
