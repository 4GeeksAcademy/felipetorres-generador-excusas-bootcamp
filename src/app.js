/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The cat", "My sister", "My dragon", "My blender"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my house", "my phone", "the car", "my bag"];
  let when = [
    "before the class",
    "when I was bathing",
    "while running",
    "during my lunch",
    "while I was playing"
  ];

  const getElementRnadom = listElement => {
    let element = "";
    element = listElement[Math.floor(Math.random() * listElement.length)];
    return element;
  };
  let idexcuse = document.querySelector("#excuse");
  idexcuse.innerHTML =
    getElementRnadom(who) +
    " " +
    getElementRnadom(action) +
    " " +
    getElementRnadom(what) +
    " " +
    getElementRnadom(when);
};
