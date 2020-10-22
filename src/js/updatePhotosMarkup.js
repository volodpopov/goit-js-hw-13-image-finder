import galleryTpl from '../templates/gallery.hbs';
import refs from "../js/refs.js";

function updatePhotosMarkup(photos) {
  let markup = null;
  markup = galleryTpl(photos);
  createGalleryList(markup);
}
function createGalleryList(markup) {
  refs.galleryList.insertAdjacentHTML('beforeend', markup);
}


export default updatePhotosMarkup;
