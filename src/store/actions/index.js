import axios from "axios";
import * as actionTypes from './actionTypes';

import instance from '../../utils/happyStarAxiosInstance';

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
        data: json,
        stars: json
    }
};

const receiveError = (json) => {
    return {
        type: actionTypes.RECV_ERROR,
        data: json
    }
};

export const fetchData = (city) => {
    const url = 'api/star';

    return (dispatch) => {
        dispatch(requestData());

        return instance.get(url)
            .then((response) => {
                console.log(response);
                dispatch(receiveData(response.data));
            })
            .catch((response) => {
                dispatch(receiveError(response.data));
            })
    }
};

