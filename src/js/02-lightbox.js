import { galleryItems } from './gallery-items.js';
// Change code below this line


const container = document.querySelector('.gallery');
const markupGallery = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="Image description" />
   </a>
</li>`);

container.insertAdjacentHTML('beforeend', markupGallery.join(""));