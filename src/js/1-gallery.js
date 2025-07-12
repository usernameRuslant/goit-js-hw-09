import SimpleLightbox from 'simplelightbox';
import { images } from './gallery-data.js';
// //====================================================================
const refs = {
  gallery: document.querySelector('.gallery'),
};
const imageCard = image => {
  const { preview, original, description } = image;
  return `<li class="gallery-item">
        <a class="gallery-link" href="${original}">
        <img class="gallery-image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
};
// //====================================================================
const imagesCards = images.map(img => imageCard(img)).join('');
refs.gallery.insertAdjacentHTML('beforeend', imagesCards);
// //====================================================================
let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

gallery.on('show.simplelightbox', function () {});
gallery.on('error.simplelightbox', function (e) {
  console.log(e);
});
