import axios from 'axios';

let devMode = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
let baseURL = devMode ? 'http://localhost:3200/' : 'https://happy-stars.herokuapp.com/';

const instance = axios.create({
    //baseURL,
    baseURL: 'https://happy-stars.herokuapp.com/',
});

export default instance;