
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

 const ulList = document.getElementById("ingredients");
 ingredients.forEach(ingredient => {
     let listIngridients = ulList.appendChild(document.createElement("li"));
     listIngridients.appendChild(document.createTextNode(ingredient));
 });
 console.log(ulList);

