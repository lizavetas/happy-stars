import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom'


import { Provider } from 'react-redux';
import configurator from './store/configurator';

const initState = {
    exampleReducer: {
        text: 'Redux Btn',
        data: {},
        isLoading: false,
        stars: {}
    }
};

ReactDOM.render(
    <Provider store={configurator(initState)}>
       <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
