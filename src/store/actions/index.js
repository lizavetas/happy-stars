import * as actionTypes from './actionTypes';
import instance from '../../utils/happyStarAxiosInstance';

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

const getUniversesFail = (json) => {
    return {
        type: actionTypes.GET_UNIVERSES_FAIL,
        data: json
    }
};

const getUniversesSuccess = (json) => {
    return {
        type: actionTypes.GET_UNIVERSES_SUCCESS,
        data: json,
        universes: json
    }
};

export const fetchUniverse = () => {
    const url = 'api/universe';

    return (dispatch) => {
        return instance.get(url)
            .then((response) => {
                console.log(response);
                dispatch(getUniversesSuccess(response.data));
                return response;
            })
            .catch((response) => {
                dispatch(getUniversesFail(response.data));
                console.log('warum', response);
                return(response);
            })
    }
};


const getStarsFail = (json) => {
    return {
        type: actionTypes.GET_STARS_FAIL,
        data: json
    }
};

const getStarsSuccess = (json) => {
    return {
        type: actionTypes.GET_STARS_SUCCESS,
        stars: json
    }
};

export const fetchStars = () => {
    const url = 'api/star';

    return (dispatch) => {
        //dispatch(requestData());
        return instance.get(url)
            .then((response) => {
                dispatch(getStarsSuccess(response.data));
                return response;
            })
            .catch((response) => {
                dispatch(getStarsFail(response.data));
                return(response);
            })
    }
};

// @todo fetch universe => then fetch stars => then return obj

export const fetchData = () => {
    const url = 'api/star';

    return (dispatch) => {
        //dispatch(requestData());

        return instance.get(url)
            .then((response) => {
                dispatch(receiveData(response.data));
                return response;
            })
            .catch((response) => {
                dispatch(receiveError(response.data));
                return(response);
            })
    }
};

