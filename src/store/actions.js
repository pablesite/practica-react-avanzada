import {
    ADVERTS_REQUEST,
    ADVERTS_FAILURE,
    ADVERTS_SUCCESS,
    SAVE_USER,
    DELETE_USER

  } from './types';
  
  export const fetchAdverts = (tag) => {
    return async function(dispatch, _getState, { services: { AdvertsService } }) {
      dispatch(AdvertsRequest());
      try {
        const adverts = await AdvertsService.searchAdverts(tag)
        dispatch(fetchAdvertsSuccess(adverts));
        
      } catch (error) {
        dispatch(AdvertsFailure(error));
      }
    };
  };

  export const createAdvert = (advert) => {
    return async function(dispatch, _getState, { services: { AdvertsService } }) {
      dispatch(AdvertsRequest());
      try {
        await AdvertsService.createAdvert(advert)
        dispatch(createorupdateAdvertsSuccess(advert));
      } catch (error) {
        dispatch(AdvertsFailure(error));
      }
    };
  };
  
  export const getAdvert = (id) => {
    return async function(dispatch, _getState, { services: { AdvertsService } }) {
      dispatch(AdvertsRequest());
      try {
        const advert = await AdvertsService.getAdvert(id)
        dispatch(createorupdateAdvertsSuccess(advert));
      } catch (error) {
        dispatch(AdvertsFailure(error));
      }
    };
  };


  export const updateAdvert = (advert, id) => {
    return async function(dispatch, _getState, { services: { AdvertsService } }) {
      dispatch(AdvertsRequest());
      try {
        const { result } = await AdvertsService.updateAdvert(advert, id)
        dispatch(createorupdateAdvertsSuccess(result));
      } catch (error) {
        dispatch(AdvertsFailure(error));
      }
    };
  };

  
  export const AdvertsRequest = () => ({
    type: ADVERTS_REQUEST,
  });
  

  export const fetchAdvertsSuccess = adverts => ({
    type: ADVERTS_SUCCESS,
    adverts: adverts,
  });


  export const createorupdateAdvertsSuccess = advert => ({
    type: ADVERTS_SUCCESS,
    adverts: [advert] 
  });

  export const AdvertsFailure = error => ({
    type: ADVERTS_FAILURE,
    error,
  });


  export const saveUser = user => ({
    type: SAVE_USER,
    user,
  });

  export const deleteUser = () => ({
    type: DELETE_USER,
    user: null,
  });

