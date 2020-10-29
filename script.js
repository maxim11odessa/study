const numberOfFilms = +prompt("Сколько фильмоа вы уже посмотрели?", "");

let personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
};

for (let i = 0; i < 2; i++) {
   const a = prompt("Один из просмотренный фильмов?", ""),
      b = prompt("На сколько вы оцените его?", "");
   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
   } else {
      console.log('Error');
      i--;
   }
};

if (personalMovieDB.count < 10) {
   console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
   console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
   console.log('Вы киноман');
} else {
   console.log('Произошла ошибка!');
};

console.log(personalMovieDB);

// const numm = 5;
// (numm === 50) ? console.log('Ok') : console.log('Error');
