import axios from 'axios';

const BASE_URL = '';

const instance = axios.create({
    baseURL: 'https://happy-stars.herokuapp.com/'
});

export default instance;