import Advert from '../models/Advert';

const API_URL = 'http://localhost:3001/apiv1/anuncios/';
//const API_KEY = '1d3ad03800b6b9dac38bcea89b495be8'

const getRequest = (url) => {
  return fetch(url,
   { method: "GET" },
   { 
     Accept: "application/json, text/plain, */*"}
   )
   .then(res => res.json());
}

const discoverAdverts = () => {
  return getRequest(`${API_URL}`)
  .then(res => res.results.map(mov => new Advert(mov)))
}

const getAdvert = (advertID) => {
  return getRequest(`${API_URL}${advertID}`)
  .then(res => {
    if (!res.success) {
      return res;
    } else {
      return new Advert(res.result);
    }
  })
}

const searchAdverts = (query) => {
  return getRequest(`${API_URL}/search/movie&query=${query}&page=1&include_adult=false`)
  .then(res => res.results.map(mov => new Advert(mov)))
}

export {
  searchAdverts,
  discoverAdverts,
  getAdvert
};