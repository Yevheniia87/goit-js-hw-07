
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ulList = document.getElementById("ingredients");
const foodIngredients = ingredient => {
  let item = document.createElement("li");
  item.innerHTML = ingredient;
  return item;
};
const listEl = ingredients.flatMap(foodIngredients);
ulList.append(...listEl);

console.log(ulList)






// const ulEl = document.querySelector('#ingredients');
// const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');
// ulEl.innerHTML = list;


 
