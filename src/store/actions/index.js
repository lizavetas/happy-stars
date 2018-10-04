import * as actionTypes from './actionTypes';
import instance from '../../utils/happyStarAxiosInstance';

const getUniversesSuccess = (json) => {
    return {
        type: actionTypes.GET_UNIVERSES_SUCCESS,
        data: json,
        universes: json
    }
};

const getUniversesFail = (json) => {
    return {
        type: actionTypes.GET_UNIVERSES_FAIL,
        data: json
    }
};

const postUniverseSuccess = (json) => {
    return {
        type: actionTypes.POST_UNIVERSE_SUCCESS,
        universe: json
    }
};

const postUniverseFail = (json) => {
    return {
        type: actionTypes.POST_UNIVERSE_FAIL,
        error: json
    }
};

const getStarsSuccess = (json) => {
    return {
        type: actionTypes.GET_STARS_SUCCESS,
        stars: json
    }
};

const getStarsFail = (json) => {
    return {
        type: actionTypes.GET_STARS_FAIL,
        data: json
    }
};

const deleteStarSuccess = (id) => {
    return {
        type: actionTypes.DELETE_STAR_SUCCESS,
        id: id
    }
};

const deleteStarFail = (id) => {
    return {
        type: actionTypes.DELETE_STAR_FAIL,
        id: id
    }
};

const postStarSuccess = (star) => {
    return {
        type: actionTypes.POST_STAR_SUCCESS,
        star: star
    }
};

const postStarFail = (json) => {
    return {
        type: actionTypes.POST_STAR__FAIL,
        error: json
    }
};

export const postNewStar = (universeId, name, color) => {
    const url = 'api/star/';
    return (dispatch) => {
        return instance
            .post(url, {
                id: 0,
                name: name,
                color: color,
                universeId: universeId
            })
            .then(function (response) {
                dispatch(postStarSuccess(response.data));
            })
            .catch(function (error) {
                console.log(error);
                dispatch(postStarFail(error));
            });
    }
};

export const postNewUniverse = (name, maxSize) => {
    const url = 'api/universe/';
    return (dispatch) => {
        return instance
            .post(url, {
                id: 0,
                name: name,
                maxSize: maxSize
            })
            .then(function (response) {
                dispatch(postUniverseSuccess(response));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
};

export const deleteStar = (id) => {
    const url = 'api/star/' + id;
    return (dispatch) => {
        return instance.delete(url)
            .then(response => {
                dispatch(deleteStarSuccess(id));
                return response;
            })
            .catch((response) => {
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



