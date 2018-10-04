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
                stars: action.stars
            };
        case actionTypes.GET_UNIVERSES_SUCCESS:
            return {
                ...state,
                universes: action.universes
            };
        case actionTypes.DELETE_STAR_SUCCESS:
            return {
                ...state,
                universes: {
                    ...state.universes.universes,
                    stars: []
                }
            };
        case actionTypes.POST_UNIVERSE_SUCCESS:
           state.universes.universes.push(action.universe.data);
            return {
                ...state,
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    exampleReducer
});

export default rootReducer;