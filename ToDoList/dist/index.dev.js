"use strict";

var input = document.querySelector(".input_text");
var btn = document.querySelector(".addTask");
var list = document.querySelector(".ul");
var wrap = document.querySelector("#wrap");

function genId() {
  return Math.random().toString(36).substr(2, 9);
}

function addTasks(HTMLInputElement) {
  var newElement = document.createElement("div"); // создаем новый эдемент строку, которая содержит все, что относится к элементу туду

  newElement.className = "new_elem_li"; // присвиваем новому элементу классНэйм new_elem_li

  newElement.draggable = "true";
  newElement.setAttribute("data-id", genId()); // newElement.setAttribute("id",HTMLInputElement);

  var div_with_data = document.createElement("div"); // создаем див чекбоксом и текстом

  div_with_data.id = "wrap";
  var label = document.createElement("label");
  label["for"] = "checkbox";
  var check = document.createElement("input"); // создаем инпут с ЧекБоксом

  check.id = "checkbox";
  check.type = "checkbox";
  var name = document.createElement("span"); // создаем Спан

  name.textContent = HTMLInputElement;
  var buttonDelete = document.createElement("button"); // создаем кнопку с тэгом button

  buttonDelete.className = "delete"; // присвиваем кнопке классНэйм delete

  buttonDelete.textContent = "delete"; // присвиваем кнопке контент delete

  buttonDelete.setAttribute("data-id", HTMLInputElement);
  list.appendChild(newElement);
  newElement.appendChild(div_with_data);
  div_with_data.appendChild(label);
  div_with_data.appendChild(check);
  div_with_data.appendChild(name);
  newElement.appendChild(buttonDelete);
}

btn.addEventListener("click", function (e) {
  e.preventDefault(); // метод позволяет отменить действие браузера по умолчанию

  if (!(input.value === "")) {
    // если значение в инпут НЕ пустой, то отправляем в список
    addTasks(input.value); // вызываем функцию по Дабавлению элемента и передаем значение из инпута

    input.value = ""; // после отправки задачи возвращается пустое значение в поле инпут
  }
});
document.addEventListener("keyup", function (e) {
  e.preventDefault(); // рассказать

  if (e.code === "Enter" && !(input.value === "")) {
    addTasks(input.value);
    input.value = "";
  }
});

function deleteElement(event) {
  if (event.target.className === "delete") {
    var buttonDelete = event.target;
    var id = buttonDelete.getAttribute("data-id");
    var listItem = list.querySelector(".new_elem_li");
    list.removeChild(listItem);
  }
}

document.addEventListener("click", deleteElement);
var one = {
  name: "hello",
  age: 33
};
var two = {
  noName: "world",
  age: 55
};
var five = [3, 5, "ghggjjjjk"];
var clone = {};
var cloneArr = [];

for (key in one) {
  clone[key] = one[key];
}

for (key in five) {
  cloneArr[key] = five[key];
}

Object.assign(clone, one, two);
console.log(clone);