import { galleryItems } from './gallery-items.js';
// Change code below this line



const container = document.querySelector('.gallery');
const markupGallery = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
       
   </a>
</li>`);

container.insertAdjacentHTML('beforeend', markupGallery.join(""));
container.addEventListener('click', onClick);

const galleryList = new SimpleLightbox('.gallery a',{
  captionType: 'alt', 
});

function onClick(event) {
   
};