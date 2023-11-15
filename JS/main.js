"use strict";
let numberOfFilms;
function start (){
 numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
 while(numberOfFilms == ''|| isNaN(numberOfFilms) ||numberOfFilms == null ){
	numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
 }
}
start();
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: true,
};

function rememberMyFilms(){
	for (let i = 0; i < 2; i++) {
		const lastFilm = prompt("Один из просмотренных последних фильмов?", ""),
		  yourRate = prompt("На сколько оцените?", "");
		if (
		  lastFilm != null &&
		  yourRate != null &&
		  lastFilm != "" &&
		  yourRate != "" &&
		  lastFilm.length < 50
		) {
		  personalMovieDB.movies[lastFilm] = yourRate;
		  console.log("done");
		} else {
		  console.log("error");
		  i--;
		}
	  }
}
// rememberMyFilms();
function lvl(){
	if (personalMovieDB.count < 10) {
		console.log("Просмотрено довольно мало фильмов");
	  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
		console.log("Вы классический зритель");
	  } else if (personalMovieDB.count > 30) {
		console.log("Вы киноман");
	  } else {
		console.log("Произошла ошибка");
	  }
}
// lvl();

function showMyDB(hidden){
	if(!hidden){
		console.log(personalMovieDB);
	}
}
showMyDB(personalMovieDB.private);
let answers;
function writeYourGenres(){
	for(let i = 1; i <= 3;i++){
		answers = prompt(`Ваш любимый жанр под номером ${i}`,'')
		personalMovieDB.genres[i - 1] = answers;
	}
	console.log(personalMovieDB);
}
writeYourGenres();
/* Задание на урок:


2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/




// Код возьмите из предыдущего домашнего задания