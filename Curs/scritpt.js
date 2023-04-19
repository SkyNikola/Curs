"use strict";

let numberOfFilms = prompt("How many films have you watched?");

let personalMoieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Your last film."),
  b = prompt("How much do you rate it?"),
  c = prompt("Your last film."),
  d = prompt("How much do you rate it?");

personalMoieDB.movies[a] = b;
personalMoieDB.movies[c] = d;

console.log(personalMoieDB);
