import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import axios from 'axios';

//console.log(axios.isCancel('something'));

import { getPhotos } from './js/pixabay-api';
import { photosTemplate } from './js/render-functions';

//===============================variables=================================
const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const btnLoadMore = document.querySelector('.btn');
const preloader = document.querySelector('.loader');
let inputValue;
let currentPage = 1;
let maxPage = 0;
const perPage = 15;

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

//=============================function===========================================

lightbox.on('show.simplelightbox', function () {});

function checkBtnStatus() {
  if (currentPage >= maxPage) {
    hideLoadMore();
    iziToast.warning({
      message: 'We are sorry, but you have reached the end of search results.',
      color: 'blue',
      position: 'topRight',
    });
  } else {
    showLoadMore();
  }
}
function myScroll() {
  const height = gallery.firstChild.getBoundingClientRect().height;
  console.log(height);
  scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
}
function showLoadMore() {
  return btnLoadMore.classList.remove('is-hidden');
}
function hideLoadMore() {
  return btnLoadMore.classList.add('is-hidden');
}

function showLoader() {
  return preloader.classList.remove('is-hidden');
}
function hideLoader() {
  return preloader.classList.add('is-hidden');
}
hideLoader();
hideLoadMore();

form.addEventListener('submit', async e => {
  e.preventDefault();

  inputValue = e.target.elements.search.value.trim();
  if (inputValue === '') {
    return iziToast.warning({
      message: 'Please complete the field!',
      color: 'red',
      position: 'topRight',
    });
  }
  gallery.innerHTML = '';
  currentPage = 1;
  showLoader();
  try {
    const photos = await getPhotos(inputValue, currentPage);
    maxPage = Math.ceil(photos.totalHits / perPage);
    const markup = photosTemplate(photos.hits);
    if (photos.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        color: 'red',
      });
    
    } else {
      gallery.insertAdjacentHTML('beforeend', markup);
      lightbox.refresh();
       checkBtnStatus();
    }
  } catch (error) {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
      color: 'red',
    });
  } finally {
    hideLoader();
    form.reset();
  }
});

btnLoadMore.addEventListener('click', async e => {
  showLoader();
  currentPage += 1;
  const photos = await getPhotos(inputValue, currentPage);
  const markup = photosTemplate(photos.hits);
  gallery.insertAdjacentHTML('beforeend', markup);
  myScroll();
  lightbox.refresh();
  hideLoader();
  checkBtnStatus();
});
