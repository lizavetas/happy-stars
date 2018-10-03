import { combineReducers } from 'redux';
import * as actionTypes from '../actions/actionTypes';


const exampleReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.CLICK_BUTTON:
            return {
                ...state,
                text: (state.text === action.text) ? 'REDUX BTN' : action.text
            };
        case actionTypes.GET_STARS_SUCCESS:
            return {
                ...state,
                stars: action.stars,
                isLoading: false
            };
        case actionTypes.GET_UNIVERSES_SUCCESS:
            return {
                ...state,
                universes: action.universes,
                isLoading: false
            };
        case actionTypes.DELETE_STAR_SUCCESS:
            console.log(state.stars.stars, action);
            debugger
            return {
                ...state,
                universes: {
                    ...state.universes.universes,
                    stars: []
                },
                isLoading: true
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    exampleReducer
});

export default rootReducer;