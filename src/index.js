import './sass/main.scss';
import 'material-design-icons';
import { ApiService } from './js/apiService';
import moviesPicturesListTpl from './templates/pictures-list.hbs';

const apiItems = new ApiService();

const refs = {
  form: document.querySelector('#search-form'),
  input: document.querySelector('input[name=query]'),
  listPictures: document.querySelector('.gallery'),
  button: document.querySelector('.button'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  getItems(refs.input.value);
}

async function getItems(items) {
  try {
    apiItems.page = 1;
    apiItems.query = items;

    const result = await apiItems.fetchItems();

    if (refs.input.value) {
      refs.listPictures.textContent = '';
    }
    markupItems(result);
  } catch (error) {
    console.log(error);
  }
}
async function markupItems(items) {
  const render = await refs.listPictures.insertAdjacentHTML(
    'beforeend',
    moviesPicturesListTpl(items),
  );

  const button = document.querySelector('.button');

  button.addEventListener('click', onBtnClick);
  return render;
}

async function onBtnClick() {
  try {
    console.log(apiItems.page);
    apiItems.nextPage();
    const resultMore = await apiItems.fetchItems();

    markupItems(resultMore);

    refs.listPictures.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  } catch (error) {
    console.log(error);
  }
}
