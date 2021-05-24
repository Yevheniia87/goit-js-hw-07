// Напиши скрипт, который реагирует на изменение значения 
// input#font - size - control
// (событие input) и изменяет инлайн - стиль span#text обновляя свойство 
// font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span> 

let inputEl = document.getElementById("font-size-control");
let spanEl = document.getElementById("text");
inputEl.addEventListener("input", el => {
    const size = inputEl.value;
    spanEl.style.fontSize = size + "px";

});






// document.getElementById("font-size-control").oninput=function(){
//   document.getElementById("text").innerText=this.value; 
// }

