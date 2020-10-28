const numberOfFilms = +prompt("Сколько фильмоа вы уже посмотрели?", "");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
const a = prompt("Один из просмотренный фильмов?", ""),
  b = prompt("На сколько вы оцените его?", ""),
  c = prompt("Один из просмотренный фильмов?", ""),
  d = prompt("На сколько вы оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
