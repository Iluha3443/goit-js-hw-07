import { galleryItems } from './gallery-items.js';
// Change code below this line


 
const container = document.querySelector('.gallery');
const markup = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="Image description"
    />
  </a>
</li>`);

container.insertAdjacentHTML('beforeend', markup.join(""));
container.addEventListener('click', onClick);





function onClick(event) {
    event.preventDefault();
    const target = event.target;
    if (!target.classList.contains('gallery__image')) { 
        return;
    }
      const instance = basicLightbox.create(`
      <img src="${target.dataset.source}" width="800" height="600"> `
   );
   instance.show()

        
    document.addEventListener("keydown", (evt) => {
        if (evt.code === "Escape") {
            instance.close()
        }

    })   
}



    
     
 