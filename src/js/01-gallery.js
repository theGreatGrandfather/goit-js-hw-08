// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log('SimpleLightbox', SimpleLightbox)

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const list = document.querySelector('.gallery');

const itemsMarkup = galleryItems.map((item) => {
    return `
       
            <a class="gallery__link" href=${item.original}>
                <img class="gallery__image" src=${item.preview} alt=${item.description} />
            </a>`
        ;
}).join("");

list.innerHTML = itemsMarkup;

var lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
});