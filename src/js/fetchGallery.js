import axios from 'axios'

export default class PhotoAPI {
  
  static USER_KEY = '33045436-8e58141e6d6ddbbbde7b75c75';
  static BASE_URL = 'https://pixabay.com/api/';

  constructor() {
    this.page = null;
    this.query = null;
    this.per_page = 39;
  }

  fetchQuery() {
    const searchOptions = {
      params: {
        key: PhotoAPI.USER_KEY,
        q: this.query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: this.per_page,
        page: this.page
      }
    }

    return axios.get(`${PhotoAPI.BASE_URL}`, searchOptions)
  }
}

// 
