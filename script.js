// let numberOfFilms;

// function start() {
//    numberOfFilms = +prompt("Сколько фильмоа вы уже посмотрели?", "");
//    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) 
//       numberOfFilms = +prompt("Сколько фильмоа вы уже посмотрели?", "");
//    }
// }

// start();

// let personalMovieDB = {
//    count: numberOfFilms,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: false,
// };

// function rememberMyFilms() {
//    for (let i = 0; i < 2; i++) {
//       const a = prompt("Один из просмотренный фильмов?", ""),
//          b = prompt("На сколько вы оцените его?", "");
//       if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//          personalMovieDB.movies[a] = b;
//       } else {
//          console.log('Error');
//          i--;
//       }
//    }
// }
// rememberMyFilms();


// function detectPersonalLevel() {
//    if (personalMovieDB.count < 10) {
//       console.log('Просмотрено довольно мало фильмов');
//    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
//       console.log('Вы классический зритель');
//    } else if (personalMovieDB.count > 30) {
//       console.log('Вы киноман');
//    } else {
//       console.log('Произошла ошибка!');
//    }
// }
// detectPersonalLevel();

// function showMyDB(hidden) {
//    if (!hidden){
//       console.log(personalMovieDB);
//    }
// }
// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//    for (let i = 1; i <= 3; i++) {
//       let genre = prompt(`Ваш любимый жанр?: ${i}`);
//       personalMovieDB.genres[i - 1] = genre;


//    }
// }
// writeYourGenres();
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


let str = prompt("", "");
let products = str.split(", ");
console.log(products);


console.log(Object.assign())