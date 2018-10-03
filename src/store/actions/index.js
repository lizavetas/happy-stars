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

export const fetchData = (city) => {
    const url = 'api/star';

    return (dispatch) => {
        dispatch(requestData());

        return instance.get(url)
            .then((response) => {
                console.log(response);
                dispatch(receiveData(response.data));
                return response;
            })
            .catch((response) => {
                dispatch(receiveError(response.data));
                return(response);
            })
            .then((response) => {
                instance.get('api/universe')
                    .then((response) => {
                        console.log(response);
                        return response;
                    })
                    .catch((response) => {
                        return(response);
                    })
            })
    }
};

