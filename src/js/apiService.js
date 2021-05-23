import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';

export const fetchItems = async (searchQuery, page = 1) => {
  const response = await axios.get(
    `&q=${searchQuery}&page=${page}&per_page=12&key=21737964-f95ae509173e22fa890b9705b`,
  );
  // console.log(response.data.hits);
  return response.data.hits;
};
