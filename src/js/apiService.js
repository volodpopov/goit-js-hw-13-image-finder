const apiKey = '18796683-6210221644807583f1ab11642';
const baseUrl = 'https://pixabay.com/api/';

export default {
  searchQuery: '',
  page: 1,
  fetchPhotos() {
    const url = `${baseUrl}?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${apiKey}`;

    return fetch(url)
      .then(response => response.json())
      .then(({ hits }) => {
        this.incrementPage();
        return hits;
      })
      .catch(error => console.log(error));
  },
  resetPage() {
    this.page = 1;
  },
  incrementPage() {
    this.page += 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};
