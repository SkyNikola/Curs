"use strict";
/////// exerise 1
const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (let i = 0; i < arr.length; i++) {
  result[i] = arr[i];
}

console.log(result);

///// exercise 2,3

const data = [5, 10, "Shopping", 20, "Homework"];
const data2 = [];

for (let i = 0; i < data.length; i++) {
  if (typeof data[i] === "number") {
    data2[i] = data[i] * 2;
  } else if (typeof data[i] === "string") {
    data2[i] = `${data[i]} done`;
  }
}
console.log(data2);
console.log(data.reverse());

////////// Exercise 4

const lines = 5;
let result1 = "";

for (let i = 0; i <= lines; i++) {
  for (let j = 0; j < lines - i; j++) {
    result1 += " ";
  }
  for (let j = 0; j < 2 * i + 1; j++) {
    result1 += "*";
  }
  result1 += "\n";
}

console.log(result1);

////////////Practicl 2

let numberOfFilms = prompt("How many films have you watched?");

let personalMoieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

//
// personalMoieDB.movies[c] = d;

for (let i = 0; i <= 1; i++) {
  const a = prompt("Your last film."),
    b = prompt("How much do you rate it?");
  if (
    a != null &&
    b != null &&
    a != "" &&
    b != "" &&
    a.length < 50 &&
    b.length < 50
  ) {
    personalMoieDB.movies[a] = b;
    console.log("done");
  } else {
    console.log("error");
    i--;
  }
}

if (personalMoieDB.count <= 10) {
  alert("This is very little");
} else if (personalMoieDB.count > 10 && personalMoieDB.count <= 30) {
  alert("Standart cinephile");
} else if (personalMoieDB.count > 30) {
  alert("real cinephile");
} else {
  alert("Error");
}

console.log(personalMoieDB);
