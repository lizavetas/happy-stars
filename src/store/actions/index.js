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

const fetchUniverse = () => {

};

export const fetchData = (city) => {
    const url = 'api/starr';

    return (dispatch) => {
        //dispatch(requestData());

        return instance.get(url)
            .then((response) => {
                console.log(response);
                dispatch(receiveData(response.data));
                return response;
            })
            .catch((response) => {
                dispatch(receiveError(response.data));
                console.log('warum', response);
                return(response);
            })

    }
};

