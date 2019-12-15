import reducer  from './reducers';
import * as types from "./types";


describe('reducers', () => {
   
    it('should handle a SET USER action', () => {
        const initialState = { user: { name: 'Pablo', surname: 'Ruiz', email: 'pabloruiz@ctnaval.com', tag: 'motor'}};
        
        const user = {name: 'Ana', surname: 'Martínez', email: 'ana@ctnaval.com', tag: 'mobile'};

        const action = {
            type: types.SET_USER,
            user
        };

        const expectedState = {user: {name: 'Ana', surname: 'Martínez', email: 'ana@ctnaval.com', tag: 'mobile'}}
        
        expect(reducer(initialState, action)).toEqual(expectedState);
           
   });
   
});
