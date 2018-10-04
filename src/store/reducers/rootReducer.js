import { combineReducers } from 'redux';
import * as actionTypes from '../actions/actionTypes';


const exampleReducer = (state = {}, action) => {
    switch (action.type) {
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
            let star = state.stars.stars.filter((star) => {
                return star.id !== action.id;
            });

            let stars = [...state.stars.stars, ...star];

            //console.log(star, stars, state, state.stars.stars);

            return {
                ...state,
                stars: {
                    stars: []
                }
            };
        case actionTypes.POST_UNIVERSE_SUCCESS:
           let universes = [...state.universes.universes, [action.universe.data]];
           console.log('universes', universes);

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