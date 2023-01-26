
export default class PhotoAPI {
  
  static USER_KEY = '33045436-8e58141e6d6ddbbbde7b75c75';
  static BASE_URL = 'https://pixabay.com/api/';

  constructor() {
    this.page = null;
    this.query = null;
  }

  fetchQuery() {
    const searchOptions = new URLSearchParams ({
      key: PhotoAPI.USER_KEY,
      q: this.query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 5,
      page: this.page
    })

    return fetch(`${PhotoAPI.BASE_URL}?${searchOptions}`).then(response =>{
      if(!response.ok){
        throw new Error(response.status)
      }
      return response.json()
    })
  }

}










