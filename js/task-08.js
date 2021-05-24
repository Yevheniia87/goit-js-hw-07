const render = document.querySelector("[data-action='render']");
const destroy = document.querySelector("[data-action='destroy']");
const boxes = document.getElementById("boxes");


render.addEventListener("click", getAmount);
destroy.addEventListener("click", destroyBoxes);

