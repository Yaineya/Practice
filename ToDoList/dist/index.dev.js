"use strict";

var input = document.querySelector(".input_text");
var btn = document.querySelector(".addTask");
var list = document.querySelector(".ul");

function addTasks(text) {
  var newElement = document.createElement("div"); // создаем новый эдемент строку, которая содержит все, что относится к элементу туду

  newElement.className = "new_elem_li"; // присвиваем новому элементу классНэйм new_elem_li

  newElement.setAttribute('data-id', text); // это название туду

  var name = document.createElement("span");
  name.textContent = text; // создаем новый эдемент с тэгом button

  var buttonDelete = document.createElement("button");
  buttonDelete.className = "delete"; // присвиваем новому элементу классНэйм delete

  buttonDelete.textContent = "delete";
  buttonDelete.setAttribute('data-id', text);
  newElement.appendChild(name);
  newElement.appendChild(buttonDelete);
  list.appendChild(newElement); // в блок УЛ добавляем Ребенка newElement
  // рассказать
  // создает на каждый элменет свой обработчик
  // это отжирает память, так как на каждый элемент оздается свой обработчик удаления
  // а также при удалении надо делать `.removeEventListener`
  // buttonDelete.addEventListener("click", function () {
  //     list.removeChild(newElement);
  //     list.removeChild(buttonDelete);
  // })
  // list.appendChild(buttonDelete);
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
document.addEventListener("click", function (e) {
  // console.log(e.target.className)
  if (e.target.className === 'delete') {
    var buttonDelete = e.target;
    var id = buttonDelete.getAttribute('data-id');
    var listItem = list.querySelector("[data-id=".concat(id, "]")); // console.log(listItem)

    list.removeChild(listItem);
  }
});