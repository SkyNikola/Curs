"use strict";

let numberOfFilms = prompt("How many films have you watched?");
let lastFilm = prompt("Your last film.");
let rate = prompt("How much do you rate it?");

let personalMoieDB = {
  count: numberOfFilms,
  movies: {
    lastFilm,
    rate,
  },
  actors: "",
  genres: [],
  privat: false,
};

console.log(personalMoieDB);
