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
                dispatch(getUniversesSuccess(response.data));
                return response;
            })
            .catch((response) => {
                dispatch(getUniversesFail(response.data));
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

const deleteStarSuccess = (id) => {
    return {
        type: actionTypes.DELETE_STAR_SUCCESS,
        id: id
    }
};

export const deleteStar = (id) => {
    const url = 'api/star/' + id;
    return (dispatch) => {
        return instance.delete(url)
            .then(response => {
                console.log(response);
                dispatch(deleteStarSuccess(id));
                return response;
            })
            .catch((response) => {
                console.log(response);
                return(response);
            })
    }
};

export const fetchStars = () => {
    const url = 'api/star';

    return (dispatch) => {
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

export const fetchData = () => {
    const url = 'api/star';

    return (dispatch) => {
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



