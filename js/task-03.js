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

// const createGalleryItem = ({ url, alt }) =>
//   `<li><img src="${url}" alt="${alt}" width = 200 height = 150></li>`;
// const galleryMarkup = images.reduce(
//   (acc, item) => acc + createGalleryItem(item),
//   ""
// );
// const galleryList = document.querySelector("#gallery");
// galleryList.insertAdjacentHTML("afterbegin", galleryMarkup);
// galleryList.setAttribute("style", "list-style-type:none; display: flex;");

 

const ulList = document.createElement('li');
ulList.classList.add('img_block');
const ulListEl = document.createElement('images');
ulListEl.classList.add('img_list');

for (let img of images) {
  const galleryList = document.getElementById("gallery").insertAdjacentHTML('afterbegin', `<li><img src="${img.url}" alt="${img.alt}" width = 150 height = 100></li>`);
  
};

//  const galleryList = document.querySelector("#gallery");
// images.forEach(el => {
//   galleryList.insertAdjacentHTML('afterbegin', `<li><img src="${img.url}" alt="${img.alt}" width = 150 height = 100></li>`);
//   galleryList.setAttribute("style", "img_list: none; display: flex; ");
// });


