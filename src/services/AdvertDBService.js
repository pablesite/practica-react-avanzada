import Advert from '../models/Advert';

const API_URL = 'http://localhost:3001/apiv1';
//const API_KEY = '1d3ad03800b6b9dac38bcea89b495be8'

const getRequest = (url) => {
  return fetch(url,
   { method: "GET" },
   { 
     Accept: "application/json, text/plain, */*"}
   )
   .then(res => res.json());
}

const getTags = () => {
  
  return getRequest(`${API_URL}/tags/`)
  .then(res => res.results) //revisar esto
}

const getAdvert = (advertID) => {
  return getRequest(`${API_URL}/anuncios/${advertID}`)
  .then(res => {
    if (!res.success) {
      return res;
    } else {
      return new Advert(res.result);
    }
  })
}

const discoverAdverts = () => {
  console.log('test')
  return getRequest(`${API_URL}/anuncios/`)
  .then(res => res.results.map(adv => new Advert(adv)))
}


const searchAdverts = (query) => {
  return getRequest(`${API_URL}/anuncios?${query}`)
  .then(res => res.results.map(adv => new Advert(adv)))
}


export {
  getTags,
  getAdvert,
  discoverAdverts,
  searchAdverts
};