import {
    FETCH_ADVERTS_REQUEST,
    FETCH_ADVERTS_FAILURE,
    FETCH_ADVERTS_SUCCESS,
    CREATE_ADVERTS_SUCCESS,
    CREATE_ADVERTS_FAILURE,
    //SET_ADVERTS,
    SET_FILTER,
    SET_USER,
    // ADD_TO_CART,
    // ADD_TO_CART_SUCCESS,
    // ADD_TO_CART_REQUEST,
    // REMOVE_FROM_CART,
    // CHECKOUT_CART,
    // CHECKOUT_CART_REQUEST,
    // CHECKOUT_CART_SUCCESS,
  } from './types';
  
  export const fetchAdverts = (tag) => {
    return async function(dispatch, _getState, { services: { AdvertsService } }) {
      dispatch(fetchAdvertsRequest());
      try {
        const adverts = await AdvertsService.searchAdverts(tag)
        console.log('adverts', adverts)
        dispatch(fetchAdvertsSuccess(adverts));
      } catch (error) {
        dispatch(fetchAdvertsFailure(error));
      }
    };
  };

  export const createAdvert = (advert) => {
    return async function(dispatch, _getState, { services: { AdvertsService } }) {
      dispatch(fetchAdvertsRequest());
      try {
        await AdvertsService.createAdvert(advert)
        dispatch(createAdvertsSuccess(advert));
      } catch (error) {
        dispatch(createAdvertsFailure(error));
      }
    };
  };



  
  export const fetchAdvertsRequest = () => ({
    type: FETCH_ADVERTS_REQUEST,
  });
  
  export const fetchAdvertsFailure = error => ({
    type: FETCH_ADVERTS_FAILURE,
    error,
  });
  
  export const fetchAdvertsSuccess = adverts => ({
    type: FETCH_ADVERTS_SUCCESS,
    adverts: adverts,
  });

  export const createAdvertsSuccess = advert => ({
    type: CREATE_ADVERTS_SUCCESS,
    adverts: [advert] //debería de meter el creado pero no borrar los anteriores
  });

  export const createAdvertsFailure = error => ({
    type: CREATE_ADVERTS_FAILURE,
    error,
  });
  

  export const setFilter = filter => ({
    type: SET_FILTER,
    filter,
  });

  export const setUser = user => ({
    type: SET_USER,
    user,
  });

