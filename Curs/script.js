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

///////////////// Cycles

// Cycl while

let num1 = 50;

while (num1 <= 55) {
  console.log(num1);
  num1++;
}

let i1 = 0;
while (i1 < 10) {
  console.log("The nunber is " + i1);
  i1++;
}

let num12 = [45, 4, 9, 16, 25];
let tex = "";
for (let x in num12) {
  console.log(tex + num12[x]);
}

let num = 10;
for (let i = 0; i < 10; i++) {
  console.log(num + [i]);
}

///////////////Loop in Loop

let result = "";
const lenght = 7;

for (let i = 1; i < lenght; i++) {
  for (let j = 0; j < i; j++) {
    result += "*";
  }

  result += "\n";
}

console.log(result);

first: for (let i = 0; i < 3; i++) {
  console.log(`First level: ${i}`);
  second: for (let j = 0; j < 3; j++) {
    console.log(`Second level: ${j}`);
    for (let k = 0; k < 3; k++) {
      if (k === 2) {
        continue second;
      }

      console.log(`Third level: ${k}`);
    }
  }
}

for (let i = 1; i <= 10; i++) {
  if (i % 2 != 0) continue;
  console.log(i);
}

const arrayOfNumbers = [];

// Пишем решение вот тут
for (let i = 5; i <= 10; i++) {
  arrayOfNumbers[i - 5] = i;
}
console.log(arrayOfNumbers);

/////// Function

////Function declaraion
function number(num2) {
  console.log(num2);
}

number(20);

//////function Expretion

let mes = function () {
  console.log("Hello");
};

mes();

///////Arrow function

const calc = (a1, b1) => a1 + b1;
console.log(calc(4, 5));
