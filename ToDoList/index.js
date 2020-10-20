let input = document.querySelector(".input_text");
let btn = document.querySelector(".addTask");
let list = document.querySelector(".ul");

function addTasks(text) {
    let newElement = document.createElement("li");  // создаем новый эдемент с тэгом li

    newElement.className = "element_li";   // создаем новый элемент с классНэймом element_li
    newElement.textContent = text;  // говорим что в новыом элементе будет значение из инпута
    list.appendChild(newElement);          // в блок УЛ добавляем Ребенка newElement
}

btn.addEventListener("click", function (e) {
    e.preventDefault();           // метод позволяет отменить действие браузера по умолчанию
    if(!(input.value === "" )){    // если значение в инпут НЕ пустой, то отправляем в список
        addTasks(input.value);    // вызываем функцию по Дабавлению элемента и передаем значение из инпута
        input.value = "";         // после отправки задачи возвращается пустое значение в поле инпут
    } 
})

document.addEventListener("keyup", function (e) {
    e.preventDefault();          
    if(e.code === "Enter") {
        addTasks(input.value);  
        input.value = "";  
    }
})


// document.addEventListener( "keyup", "click",  function (e) {
//     e.preventDefault();          
//     if(e.code === "Enter" && !(input.value === "" )) {
//         addTasks(input.value);  
//         input.value = "";  
//     }
// })


