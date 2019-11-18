import {
    GET_POSTS,
    LOADING_DATA,
    ADD_POST
} from '../types';

const initialState = {
    posts: [],
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOADING_DATA:
            return {
                ...state,
                loading: true
            };
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false
            };
        case ADD_POST:
            return {   
                ...state,
                posts: [action.payload, ...state.posts]
            };
        default:
            return state;
    }
}