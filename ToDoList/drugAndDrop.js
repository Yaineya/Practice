let bascket = document.querySelector("#bascketTrash");

let dragAndDrop = ()=> {
    let elForRemove = document.querySelectorAll(".new_elem_li");


    // function dragStart(event, index) {
    //     event.dataTransfer.setData("text", index);
    //     // console.log("драгстарт сработал");
    // };

    function dragStart(event) {
        // elForRemove.setAttribute("data-id", HTMLInputElement);
        event.dataTransfer.setData("data-id", "");
        console.log("драгстарт сработал");
      };

    function drag() {
        console.log("драг работает");
    }

    function dragEnd() {
    }

    function dragEnter(event) {
        event.preventDefault();
        console.log("перетаскиваемый над принимающим сейчас");
    }

    function dragOver(event) {
        event.preventDefault();
        console.log("dragover над принимающей зоной");
    }

    function dragLeave() {
        console.log("покинул принимающий");
    }

    function drop(event, index) {
        console.log("брошен в принимающий");
        let newElement = document.querySelector(".new_elem_li");  

        elForRemove.remove();
    }

    bascket.addEventListener("dragenter", dragEnter);
    bascket.addEventListener("dragover", dragOver);
    bascket.addEventListener("dragleave", dragLeave);
    bascket.addEventListener("drop", drop);

    list.addEventListener("dragstart", dragStart);
    list.addEventListener("dragend", dragEnd);
    list.addEventListener("drag", drag);
}

dragAndDrop();