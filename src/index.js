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

refs.form.addEventListener('submit', onFormSubmit);
refs.button.addEventListener('click', onBtnClick);

function onFormSubmit(e) {
  e.preventDefault();
  getItems(refs.input.value);
}

async function getItems(items) {
  try {
    const result = await fetchItems(items);
    console.log(result);
    markupItems(result);
  } catch (error) {
    console.log(error);
  }
}
function markupItems(items) {
  refs.listPictures.textContent = '';
  refs.listPictures.insertAdjacentHTML('beforeend', moviesPicturesListTpl(items));
}

async function onBtnClick(items, page) {
  try {
    const result = await fetchItems(items, page);
    console.log(result);
    markupItems(result);
  } catch (error) {
    console.log(error);
  }
}
