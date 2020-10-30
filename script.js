'use strict';

let personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
   start: function () {
      personalMovieDB.count = +prompt("Сколько фильмоа вы уже посмотрели?", "");
      while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
         personalMovieDB.count = +prompt("Сколько фильмоа вы уже посмотрели?", "");
      }
   },
   rememberMyFilms: function () {
      for (let i = 0; i < 2; i++) {
         const a = prompt("Один из просмотренный фильмов?", ""),
            b = prompt("На сколько вы оцените его?", "");
         if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMovieDB.movies[a] = b;
         } else {
            console.log('Error');
            i--;
         }
      }
   },
   detectPersonalLevel: function () {
      if (personalMovieDB.count < 10) {
         console.log('Просмотрено довольно мало фильмов');
      } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
         console.log('Вы классический зритель');
      } else if (personalMovieDB.count > 30) {
         console.log('Вы киноман');
      } else {
         console.log('Произошла ошибка!');
      }
   },
   showMyDB: function (hidden) {
      if (!hidden) {
         console.log(personalMovieDB);
      }
   },
   toggleVisibleMyDB: function(){
      if (personalMovieDB.privat){
         personalMovieDB.privat = false;
      } else {
         personalMovieDB.privat = true;
      }
   },
   writeYourGenres: function () {
      for (let i = 1; i <= 3; i++) {
         let genre = prompt(`Ваш любимый жанр?: ${i}`);
         if (genre === '' || genre == null){
            console.log('Вы ввели данные не корректно или не ввели из вовсе');
            i--;
         } else {
            personalMovieDB.genres[i - 1] = genre;
         }
         
      }
      personalMovieDB.genres.forEach((item, i) => {
         console.log(`Любимый жанр ${i+1}- это ${item}`);
      });
   }
};


// const numm = 5;
// (numm === 50) ? console.log('Ok') : console.log('Error');

// const options = {
//    name: 'test',
//    width: 1024,
//    height: 1024,
//    colors: {
//       border: 'black',
//       bg: 'red'
//    }
// };
// console.log(options.name);


// let str = prompt("", "");
// let products = str.split(", ");
// console.log(products);


// console.log(Object.assign())