import * as TYPES from './types';

const initialState = {
    adverts: [],
    user: {
        name: '',
        surname: '',
        email: '',
        tag: ''
    },

    isFetching: false,
    error: null,

};

export default function (state = initialState, action) {
    switch (action.type) {
        case TYPES.SET_USER:
            return {
                ...state,
                user: action.user
            };

        case TYPES.ADVERTS_SUCCESS:
            return {
                ...state,
                adverts: action.adverts,
                isFetching: false,
                error: null
            };

        case TYPES.ADVERTS_REQUEST:
            return {
                ...state,
                isFetching: true,
                error: null,
            };

        case TYPES.ADVERTS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error,
            };

        default:
            return state;
    }
};

