import {
    // FETCH_BIKES_REQUEST,
    // FETCH_BIKES_FAILURE,
    // FETCH_BIKES_SUCCESS,
    SET_ADVERTS,
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
  
  
  export const setAdverts = adverts => ({
    type: SET_ADVERTS,
    adverts,
  });

  export const setFilter = filter => ({
    type: SET_FILTER,
    filter,
  });

  export const setUser = user => ({
    type: SET_USER,
    user,
  });