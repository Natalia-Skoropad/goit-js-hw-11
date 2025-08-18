import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { refs } from './refs';

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images.map(cardTemplate).join('');
  refs.gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  refs.gallery.innerHTML = '';
}

export function showLoader() {
  refs.loader.classList.remove('hidden');
}

export function hideLoader() {
  refs.loader.classList.add('hidden');
}

function cardTemplate({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `
  <li class="gallery-item">
    <a href="${largeImageURL}">
      <img src="${webformatURL}" alt="${tags}" loading="lazy" />
    </a>
    <div class="info">
      <p><b>Likes</b><br>${likes}</p>
      <p><b>Views</b><br>${views}</p>
      <p><b>Comments</b><br>${comments}</p>
      <p><b>Downloads</b><br>${downloads}</p>
    </div>
  </li>`;
}
