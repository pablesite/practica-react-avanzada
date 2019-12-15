
import configureStore from 'redux-mock-store'; 
import thunk from 'redux-thunk';

import * as actions from './actions';
import * as types from "./types";
import * as  AdvertsService  from '../services/AdvertDBService'

jest.mock('../services/AdvertDBService');

const middlewares = [thunk.withExtraArgument({ services: { AdvertsService }  })]; 

const mockStore = configureStore(middlewares);

const store = mockStore({});

const adverts = {
    "name":"PS4Pro",
    "description": "Compro PS4 Pro con menos de 1 año de uso",
    "price":200.99,
    "type":"buy",
    "photo":"/images/anuncios/ps4pro.jpg",
    "tags":[  
       "lifestyle"
    ]
};

 const tag = 'mobile';

AdvertsService.discoverAdverts.mockResolvedValueOnce(adverts);


describe('actions', () => {
   
    it('should create a fetchAdvertsSuccess action', () => {
    
        const expectedAction = {
            type: types.ADVERTS_SUCCESS,
            adverts: adverts,
        };
        expect(actions.fetchAdvertsSuccess(adverts)).toEqual(expectedAction);
   
   });
   

   it('should create a createorupdateAdvertsSuccess action', () => {
   
        const expectedAction = {
            type: types.ADVERTS_SUCCESS,
            adverts: [adverts],
        };
        expect(actions.createorupdateAdvertsSuccess(adverts)).toEqual(expectedAction);
   
   });

    // Async test
    it('should dispatch a fetchAdverts actions', async () => {
        const expectedActions = [{
            type: types.ADVERTS_REQUEST, 
        }, {
            type:types.ADVERTS_SUCCESS,
            adverts: undefined
        }];

    await store.dispatch(actions.fetchAdverts(tag));
    expect(store.getActions()).toEqual(expectedActions);
    });   

});
