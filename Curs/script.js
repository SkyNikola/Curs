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

const usdCurs = 3.87;
const eurCurs = 4.05;
const discount = 0.9;

function convert(amount, curs) {
  return curs * amount;
}

function promotion(result) {
  console.log(discount * result);
}

promotion(convert(100, usdCurs));

function sayHello(namePerson) {
  console.log(`Hello  ${namePerson}`);
}

sayHello("Anton");

////// String

const str = "test";

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

const fruit = "Some fruit";

console.log(fruit.indexOf("r"));

const logg = "Hellow word";

console.log(logg.slice(6, 11));
console.log(logg.slice(6));
console.log(logg.slice(-5, -1));

console.log(logg.substring(6, 11));
console.log(logg.substr(6, 5));

//////////////// Math

const num2 = 12.2;

console.log(Math.round(num2));
console.log(parseFloat(num2));
console.log(parseInt(num2));

const word = "    Nik     ";
console.log(word.trim());
console.log(word.trim());

//////////////Function Callback

function learn(lang, callback) {
  console.log(`I learn : ${lang}`);
  callback();
}

learn("Java Script", function () {
  console.log("I finisz thal lection");
});

///////////////////// Objects

const object = {
  name: "test",
  wheith: 1024,
  height: 1024,
  color: {
    border: "red",
    bg: "blue",
  },
};

//  console.log(Object)

//  for (let key in Object) {
//   console.log(`Objects ${key} has dane ${Object[key]}`)
//  };

//  console.log (object["color"]["border"]);

let conter = 0;

for (let key in object) {
  if (typeof object[key] === "object") {
    for (let i in object[key])
      console.log(`Objects ${i} has dane ${object[key][i]}`);
    conter++;
  } else {
    console.log(`Objects ${key} has dane ${object[key]}`);
    conter++;
  }
}

console.log(conter);

console.log(Object.keys(object).length);

////////////////// Arrays

const arr = [2, 3, 5, 10];

arr.pop();
arr.push(1);

for (let x of arr) {
  console.log(x);
}

//arr[99] = 1;

console.log(arr.length);
console.log(arr);

arr.forEach(function (item, i, arr) {
  console.log(`${i} : ${item} inside ${arr}`);
});

const str1 = prompt("", "");
const products = str1.split(",");
products.sort();
console.log(products.join(":"));

const arr1 = [1, 26, 13, 4, 10];
arr1.sort((a, b) => a - b);
console.log(arr1);
