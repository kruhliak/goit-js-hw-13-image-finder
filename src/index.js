import './sass/main.scss';
import 'material-design-icons';
import { fetchItems } from './js/apiService';
import moviesPicturesListTpl from './templates/pictures-list.hbs';

const refs = {
  form: document.querySelector('#search-form'),
  input: document.querySelector('input[name=query]'),
  listPictures: document.querySelector('.gallery'),
  button: document.querySelector('.button'),
};

refs.form.addEventListener('submit', onForm);

function onForm(e) {
  e.preventDefault();
  // console.log(refs.input.value);
  getItems(refs.input.value);
}

async function getItems(items) {
  try {
    const result = await fetchItems(items);
    console.log(result);
    methodName(result);
  } catch (error) {
    console.log(error);
  }
}
function methodName(a) {
  refs.listPictures.textContent = '';
  const markupItems = moviesPicturesListTpl(a);
  refs.listPictures.insertAdjacentHTML('beforeend', markupItems);
}
