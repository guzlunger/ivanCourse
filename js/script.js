const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели', '')

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

const lastWatchedFilmName1 = prompt('Один из последних просмотренных фильмов?','')
const lastWatchedFilmScore1 = prompt('На сколько оцените его?','')
const lastWatchedFilmName2 = prompt('Один из последних просмотренных фильмов?','')
const lastWatchedFilmScore2 = prompt('На сколько оцените его?','');

//personalMovieDB.movies[`'${lastWatchedFilmName1}'`] = lastWatchedFilmScore1
//personalMovieDB.movies[`'${lastWatchedFilmName2}'`]= lastWatchedFilmScore2
personalMovieDB.movies[lastWatchedFilmName1] = lastWatchedFilmScore1
personalMovieDB.movies[lastWatchedFilmName2]= lastWatchedFilmScore2
console.log(personalMovieDB.movies)
