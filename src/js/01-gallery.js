import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
 
const container = document.querySelector('.gallery');
const markup = galleryItems.map(({ preview, original, description }) =>
    `<li> <img src="${preview}" alt="${description}" class ="gallery__image" /></li>`);

container.insertAdjacentHTML('beforeend', markup.join(""));
container.addEventListener('click', onClick);

function onClick(event) {
    console.log(event.target)

}

       
      
      
// preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
//     description: 'Hokkaido Flower',