let input = document.querySelector(".input_text");
let btn = document.querySelector(".addTask");
let list = document.querySelector(".ul");
let wrap = document.querySelector("#wrap");

function genId() {
  return Math.random().toString(36).substr(2, 9);
}

function addTasks(HTMLInputElement) {
  let newElement = document.createElement("div"); // создаем новый эдемент строку, которая содержит все, что относится к элементу туду
  newElement.className = "new_elem_li"; // присвиваем новому элементу классНэйм new_elem_li
  newElement.draggable = "true";
  newElement.setAttribute("data-id", genId());
  // newElement.setAttribute("id",HTMLInputElement);

  let div_with_data = document.createElement("div"); // создаем див чекбоксом и текстом
  div_with_data.id = "wrap";

  let label = document.createElement("label");
  label.for = "checkbox";

  let check = document.createElement("input"); // создаем инпут с ЧекБоксом
  check.id = "checkbox";
  check.type = "checkbox";

  let name = document.createElement("span"); // создаем Спан
  name.textContent = HTMLInputElement;

  let buttonDelete = document.createElement("button"); // создаем кнопку с тэгом button
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
    let buttonDelete = event.target;
    let id = buttonDelete.getAttribute("data-id");
    let listItem = list.querySelector(".new_elem_li");
    list.removeChild(listItem);
  }
}

document.addEventListener("click", deleteElement);

let one = { name: "hello", age: 33 };
let two = { noName: "world", age: 55 };
let five = [3, 5, "ghggjjjjk"];

let clone = {};
let cloneArr = [];

for (key in one) {
  clone[key] = one[key];
}

for (key in five) {
  cloneArr[key] = five[key];
}

Object.assign(clone, one, two);
console.log(clone);
