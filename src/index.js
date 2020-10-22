import './styles.css';
import updatePhotosMarkup from './js/updatePhotosMarkup.js';
import apiService from './js/apiService.js';
import refs from './js/refs.js';

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  apiService.query = form.elements.query.value;

  refs.galleryList.innerHTML = '';
  form.reset();

  apiService.resetPage();

  refs.loadMoreBtn.classList.add('is-hiden');

  apiService.fetchPhotos().then(hits => {
    updatePhotosMarkup(hits);
    refs.loadMoreBtn.classList.remove('is-hiden');
  });
});

refs.loadMoreBtn.addEventListener('click', () => {
  apiService.fetchPhotos().then(hits => {
    updatePhotosMarkup(hits);

    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  });
});
