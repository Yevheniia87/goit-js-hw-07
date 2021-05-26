
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

  // const ulList = document.getElementById("ingredients");
  // ingredients.forEach(ingredient => {
//      let listIngridients = ulList.appendChild(document.createElement("li"));
   
//      listIngridients.append(document.createTextNode(ingredient));
//  });

  //console.log(ulList);

let ulList = document.getElementById("ingredients");
const foodIngredients = ingredients.forEach(ingredient => {
  let items = document.createElement("li");
  items.innerHTML = ingredient;
  ulList.append(items);
});
console.log(ulList);



