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
    storeInfo: null

};

export default function (state = initialState, action) {
    switch (action.type) {

        case TYPES.SAVE_USER:
            return {
                ...state,
                user: action.user,
                storeInfo: 'saveUser',
                isFetching: false,
                error: null
            };

        case TYPES.DELETE_USER:
            return {
                ...state,
                user: action.user,
                storeInfo: 'deleteUser',
                isFetching: false,
                error: null
            };

        case TYPES.ADVERTS_SUCCESS:
            return {
                ...state,
                adverts: action.adverts,
                storeInfo: null,
                isFetching: false,
                error: null
            };

        case TYPES.ADVERTS_REQUEST:
            return {
                ...state,
                storeInfo: null,
                isFetching: true,
                error: null,
            };

        case TYPES.ADVERTS_FAILURE:
            return {
                ...state,
                storeInfo: null,
                isFetching: false,
                error: action.error,
            };

            case TYPES.TAGS_SUCCESS:
            return {
                ...state,
                tags: action.tags,
                storeInfo: 'tagsInStore',
                isFetching: false,
                error: null
            };

        case TYPES.TAGS_REQUEST:
            return {
                ...state,
                storeInfo: null,
                isFetching: true,
                error: null,
            };

        case TYPES.TAGS_FAILURE:
            return {
                ...state,
                storeInfo: null,
                isFetching: false,
                error: action.error,
            };

        default:
            return state;
    }
};

