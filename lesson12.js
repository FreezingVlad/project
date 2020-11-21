"use strict";
let numberOfFilms; //= +prompt("Сколько фильмов вы уже посмотрели", "");

function start () {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели", "");
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms))
     {numberOfFilms = prompt("Сколько фильмов вы уже посмотрели", "");

    }

}
start();




const personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// let a = prompt("Один из последних просмотрених фильмов", "");
// let b = prompt("На сколько оцените его", "");
// let c = prompt("Один из последних просмотрених фильмов", "");
// let d = prompt("На сколько оцените его", "");


// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

//Lesson 14



function rememberMyFilms () {
    for (let i = 0; i < 2; i++){
        let a = prompt("Один из последних просмотрених фильмов", "");
        let b = prompt("На сколько оцените его", "");
    
        if (a != null && b != null && a != "" && b != "" && a.length < 50 ) {
        personalMovieDB.movies[a] = b;
        console.log("done");
    }   else { 
        console.log("error");
        i--;
        }
   }
}   
rememberMyFilms ();

if (personalMovieDB.count < 10) {
    console.log("Malo");
}
else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Ви класичний глядач");
}
else if (personalMovieDB.count >= 30) {
    console.log("Ви кіноман");
}
else {
    console.log("ошибка");
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Malo");
    }
    else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Ви класичний глядач");
    }
    else if (personalMovieDB.count >= 30) {
        console.log("Ви кіноман");
    }
    else {
        console.log("ошибка");
    }
}
detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres () {
    for (let i = 1; i <= 3; i++){
        let genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre; //i -1 тому що для користувача ми починали з 1
    } // personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
}
writeYourGenres ();


console.log(personalMovieDB);

// Lesson18        !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


