let btn = document.querySelector(".button");
let wrapper = document.querySelector(".wrapper");
let list = document.querySelector(".ul");


function addData() {
    
    let newliElem = document.createElement("li");
    let newSpanElem = document.createElement("span");

    newDivElem.className = "li";
    newDivElem.textContent = "hello World";
    wrapper.appendChild(newliElem);

    newSpanElem.className = "span";
    newSpanElem.textContent = "вот так вот";
    wrapper.appendChild(newSpanElem);
}

btn.addEventListener("click",function () {
    addData();
})

