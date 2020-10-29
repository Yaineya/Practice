"use strict";

var btn = document.querySelector(".button");
var wrapper = document.querySelector(".wrapper");
var list = document.querySelector(".ul");

function addData() {
  var newliElem = document.createElement("li");
  var newSpanElem = document.createElement("span");
  newDivElem.className = "li";
  newDivElem.textContent = "hello World";
  wrapper.appendChild(newliElem);
  newSpanElem.className = "span";
  newSpanElem.textContent = "вот так вот";
  wrapper.appendChild(newSpanElem);
}

btn.addEventListener("click", function () {
  addData();
});