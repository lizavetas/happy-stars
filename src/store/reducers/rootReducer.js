import { combineReducers } from 'redux';
import * as actionTypes from '../actions/actionTypes';


const exampleReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.CLICK_BUTTON:
            return {
                ...state,
                text: (state.text === action.text) ? 'REDUX BTN' : action.text
            };
        case actionTypes.RECV_DATA:
            return {
                ...state,
                data: action.data,
                stars: action.stars,
                isLoading: false
            };
        case actionTypes.REQ_DATA:
            return {
                ...state,
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