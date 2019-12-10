import { ADVERT_FILTERS } from '../constants';
import * as TYPES from './types';

const initialState = {
    adverts: [],
    user: [],
    filter: ADVERT_FILTERS.ALL,
};

//   const updateBike = (bikes, updatedBikeId, update) => {
//     return bikes.map(bike => {
//       if (bike.id === updatedBikeId) {
//         return {
//           ...bike,
//           ...update(bike),
//         };
//       }
//       return bike;
//     });
//   };

export default function (state = initialState, action) {
    switch (action.type) {
        case TYPES.SET_FILTER:
            return action.filter;
        case TYPES.SET_USER:
            return action.user;
        case TYPES.FETCH_ADVERTS_SUCCESS:
            return action.adverts;
       

        default:
            return state;
    }
};

// export const filter = (state = initialState.filter, action) => {
//     switch (action.type) {
//         case TYPES.SET_FILTER:
//             return action.filter;
//         default:
//             return state;
//     }
// };