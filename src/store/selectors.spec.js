import * as selectors from '../store/selectors';

describe('selectors', () => {
   
    // This selector is based on localStorage. So... in this test a false will be return.
    it('should check if user exist', () => {
        
        expect(selectors.checkUserExist().exist).toEqual(false);
  
   });
   
});
