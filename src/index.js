import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import configurator from './store/configurator';

const initState = {
    exampleReducer: {
        isLoading: false,
        stars: {},
        universes: {}
    }
};

ReactDOM.render(
    <Provider store={configurator(initState)}>
       <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
