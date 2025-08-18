import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { refs } from './js/refs';
import { getImagesByQuery } from './js/pixabay-api';

import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions';

refs.form.addEventListener('submit', onFormSubmit);

async function onFormSubmit(e) {
  e.preventDefault();

  const query = e.currentTarget.elements['search-text'].value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search term',
      position: 'topRight',
      timeout: 5000,
    });
    return;
  }

  clearGallery();

  try {
    showLoader();
    const data = await getImagesByQuery(query);

    if (!data.hits || data.hits.length === 0) {
      iziToast.error({
        title: '',
        message:
          'Sorry, there are no images matching<br />your search query. Please try again!',
        position: 'topRight',
        timeout: 5000,
      });
      return;
    }

    createGallery(data.hits);
  } catch (err) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
      timeout: 5000,
    });
    console.error(err);
  } finally {
    hideLoader();
  }
}
