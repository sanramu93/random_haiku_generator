"use strict";
// Elements
const titleEl = document.getElementById("title");
const line1El = document.querySelector(".line--1");
const line2El = document.querySelector(".line--2");
const line3El = document.querySelector(".line--3");
const authorEl = document.getElementById("author");
const btnGenerate = document.getElementById("generate");
const fadeElm = document.querySelector(".fade");

const haikus = [
  {
    title: "October's Gold",
    haiku:
      "Like crunchy cornflakes  -Gold leaves rustle underfoot -Beauty in decay.",
    author: "Paul Holmes",
  },
  {
    title: "The Pink Summer Sphere",
    haiku:
      "The chill, worming in -Shock, pleasure, bursting within -Summer tongue awakes",
    author: "Suh Joon Kim",
  },
  {
    title: "Mellow May",
    haiku:
      "Mellow, mild, May day, -calling children out to play. -Summer's on her way!",
    author: "Patricia L. Cisco",
  },
  {
    title: "One Day Of Summer",
    haiku:
      "Beautiful sunrise -On a warm summer morning. -I wait for day's start",
    author: "David Fox",
  },
  {
    title: "The Fire",
    haiku:
      "I was in fire, -The room was dark and somber. -I sleep peacefully. ",
    author: "Andrew Mancinelli",
  },
  {
    title: "Autumn Love",
    haiku:
      "Coolness fills the air -Scarves and sweaters everywhere -Fall weather is here",
    author: "Savannah M. Jones",
  },
];

let currHaikuNum;

const genRdmHaiku = function (arr) {
  let rdmN = Math.trunc(Math.random() * arr.length);
  while (currHaikuNum === rdmN) {
    rdmN = Math.trunc(Math.random() * arr.length);
  }
  currHaikuNum = rdmN;
  return arr[rdmN];
};

btnGenerate.addEventListener("click", function () {
  fadeElm.style.opacity = 0;
  setTimeout(function () {
    const rdmHaiku = genRdmHaiku(haikus);
    const haikuLines = rdmHaiku.haiku.split("-");
    titleEl.textContent = rdmHaiku.title;
    line1El.textContent = `"${haikuLines[0]}`;
    line2El.textContent = `${haikuLines[1]}`;
    line3El.textContent = `${haikuLines[2]}"`;
    authorEl.textContent = `- ${rdmHaiku.author}`;

    fadeElm.style.opacity = 100;
  }, 400);
});
console.log(genRdmHaiku(haikus));

console.log(haikus[0].haiku.split("-"));
