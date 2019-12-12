import Advert from '../models/Advert';

const API_URL = 'http://localhost:3001/apiv1';

const getRequest = (url) => {
  return fetch(url,
   { method: "GET" },
   { 
     Accept: "application/json, text/plain, */*"}
   )
   .then(res => res.json());
}

const createRequest = (url, advert) => {
return fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(advert), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json());
}

const updateRequest = (url, advert) => {
  return fetch(url, {
    method: 'PUT', // or 'PUT'
    body: JSON.stringify(advert), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json());
  
  }

const getTags = () => {
  return getRequest(`${API_URL}/tags/`)
  .then(res => res.results) //revisar esto
}

const getAdvert = (advertID) => {
  return getRequest(`${API_URL}/anuncios/${advertID}`)
  .then(res => new Advert(res.result))
}

const discoverAdverts = () => {
  return getRequest(`${API_URL}/anuncios/`)
  .then(res => res.results.map(adv => new Advert(adv)))
}


const searchAdverts = (query) => {
  return getRequest(`${API_URL}/anuncios?${query}`)
  .then(res => res.results.map(adv => new Advert(adv)))
}

const createAdvert = (advert) => {
  return createRequest(`${API_URL}/anuncios`, advert)
  .catch(error => console.error('Error:', error))
  .then(response => ( response))

}

const updateAdvert = (advert, id) => {
  return updateRequest(`${API_URL}/anuncios/${id}`, advert)
  .catch(error => console.error('Error:', error))
  .then(response => ( response))
  
}

export {
  getTags,
  getAdvert,
  discoverAdverts,
  searchAdverts,
  createAdvert,
  updateAdvert
};