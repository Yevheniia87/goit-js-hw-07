const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



 

// const ulList = document.createElement('li');
// ulList.classList.add('img_block');
// const ulListEl = document.createElement('images');
// ulListEl.classList.add('img_list');
 //const galleryList = document.querySelector('#gallery');

// images.forEach(img => {
//   galleryList.insertAdjacentHTML('afterbegin', `<li><img src="${img.url}" alt="${img.alt}" width = 150 height = 100></li>`);
// });
// galleryList.setAttribute("style", "list-style-type:none; display: flex;   align-items: center; flex-direction: column;");

// console.log(galleryList);

images.forEach(img => {
  document.querySelector('#gallery').insertAdjacentHTML('afterbegin', `<li><img src="${img.url}" alt="${img.alt}" width = 150 height = 100></li>`);
});
console.log(gallery);