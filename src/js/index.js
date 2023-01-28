
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios'
import createCards from './templates/cards-template.js'
import PhotoAPI from './fetchGallery.js'

const photoAPI = new PhotoAPI;

const formEl = document.querySelector('#search-form')
const galleryEl = document.querySelector('.js-gallery')
const loadMoreBtn = document.querySelector('.load-more')


function onSubmitForm(e) {
  e.preventDefault()
  photoAPI.query = e.currentTarget.elements.searchQuery.value
  photoAPI.page = 1;
  loadMoreBtn.classList.add('is-hidden')

  if (photoAPI.query.trim() === '') {
    Notify.failure('Ooops!')
    galleryEl.innerHTML = ''
    return
  }

  photoAPI.fetchQuery()
    .then(({data}) => {
    console.log('data',data);

    if(data.total === 0){
      Notify.failure('Sorry, there are no images matching your search query. Please try again.')
      return
    } 
    Notify.success(`Hooray! We found ${data.totalHits} images.`)
    galleryEl.innerHTML = createCards(data.hits)

    if (data.total > photoAPI.per_page) {
      loadMoreBtn.classList.remove('is-hidden')
    }
  })
  .catch(err => console.log(err));

}

function onLoadMoreBtnClick(e) {
  photoAPI.page += 1;
  loadMoreBtn.classList.add('is-hidden')

  photoAPI.fetchQuery().then(({data}) => {
    console.log('data.hits', data.hits);
    console.log('data.hits.length < photoAPI.per_page', data.hits.length < photoAPI.per_page);
    loadMoreBtn.classList.remove('is-hidden')
    galleryEl.insertAdjacentHTML('beforeend', createCards(data.hits))

    if(data.hits.length < photoAPI.per_page){
      Notify.info("We're sorry, but you've reached the end of search results.")
      loadMoreBtn.classList.add('is-hidden')
    }

    /*
    
    ! if (data.hits === []) {
      loadMoreBtn.classList.add('is-hidden')
    }

    */
  }).catch(err => console.log(err))
}


formEl.addEventListener('submit', onSubmitForm)
loadMoreBtn.addEventListener('click', onLoadMoreBtnClick)