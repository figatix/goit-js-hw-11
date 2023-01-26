
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import createCards from './templates/cards-template.js'
import PhotoAPI from './fetchGallery.js'

const photoAPI = new PhotoAPI;

const formEl = document.querySelector('#search-form')
const galleryEl = document.querySelector('.js-gallery')
const loadMoreBtn = document.querySelector('.load-more-btn')


function onSubmitForm(e) {
  e.preventDefault()
  photoAPI.query = e.currentTarget.elements.searchQuery.value
  photoAPI.page = 1;

  if (photoAPI.query === '') {
    Notify.failure('Dyrak chu sho?')
    galleryEl.innerHTML = ''
    return
  }

  photoAPI.fetchQuery()
  .then(data => {
    if(data.total === 0){
      Notify.failure('Sorry, there are no images matching your search query. Please try again.')
      return
    } else if (data.total >= 5) {
      loadMoreBtn.classList.remove('is-hidden')
    }

    galleryEl.innerHTML = createCards(data.hits)
  })
  .catch(err => console.log(err));
}

function onLoadMoreBtnClick(e) {
  
  photoAPI.page += 1;

  photoAPI.fetchQuery().then(data => {
    galleryEl.insertAdjacentHTML( 'beforeend', createCards(data.hits))
  }).catch(err => console.log(err))
}


formEl.addEventListener('submit', onSubmitForm)
loadMoreBtn.addEventListener('click', onLoadMoreBtnClick)