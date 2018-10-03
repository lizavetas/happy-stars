import axios from "axios";
import * as actionTypes from './actionTypes';

const API_KEY = "6a78596d062df78380eff5944c4e5567";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const clickButton = () => {
    return {
        type: actionTypes.CLICK_BUTTON,
        text: 'CLICK_BUTTON'
    };
};

const requestData = () => {
    return {
        type: actionTypes.REQ_DATA
    }
};

const receiveData = (json) => {
    return {
        type: actionTypes.RECV_DATA,
        data: json
    }
};

const receiveError = (json) => {
    return {
        type: actionTypes.RECV_ERROR,
        data: json
    }
};

export const fetchData = (city) => {

    const url = `${ROOT_URL}&q=${city},us`;

    return (dispatch) => {
        dispatch(requestData());

        return axios.get(url)
            .then((response) => {
                dispatch(receiveData(response.data));
            })
            .catch((response) => {
                dispatch(receiveError(response.data));
            })
    }
};

