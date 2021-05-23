import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';

// export const fetchItems = async (searchQuery, page = 1) => {
//   const KEY = '21737964-f95ae509173e22fa890b9705b';
//   const response = await axios.get(`&q=${searchQuery}&page=${page}&per_page=12&key=${KEY}`);
//   // console.log(response.data.hits);
//   return response.data.hits;
// };

export class ApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.key = '21737964-f95ae509173e22fa890b9705b';
  }

  async fetchItems() {
    axios.defaults.baseURL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
    const response = await axios.get(
      `&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${this.key}`,
    );

    return response.data.hits;
  }
  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    return (this.searchQuery = newQuery);
  }

  nextPage() {
    this.page += 1;
  }
}
