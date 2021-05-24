
// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];

// const ulList = document.getElementById("ingredients");
// ingredients.forEach(ingredient => {
//     let listIngridients = ulList.appendChild(document.createElement("li"));
//     listIngridients.appendChild(document.createTextNode(ingredient));
// });
// console.log(ulList);

const refs = {
    login: document.querySelector('.login'),
    message: document.querySelector('.message'),
    button: document.querySelector('.button'),
    wrapper: document.querySelector('.wrapper'),
    form: document.querySelector('.form'),
};


refs.form.style.display = 'flex';
refs.form.style.flexDirection = 'column';
refs.form.style.maxWidth = '300px';

refs.button.addEventListener('click', (event) => {
  const newMessage = refs.message.value;
  const login = refs.login.value;
  const element = document.createElement('div');

  const messageValue = document.createElement('p');
  element.textContent = newMessage;

  const loginValue = document.createElement('p');
  loginValue.textContent = login;

  element.append(messageValue, loginValue);
  refs.wrapper.append(element);
});
console.log(refs);