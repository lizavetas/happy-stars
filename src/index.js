import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom'


const Universes = () => (
    <p>This is the Universes Page</p>
);

const Stars = () => (
    <p>This is the Stars Page</p>
);

const IRouter = () => (
    <Switch>
        <Route exact path='/' component={Universes}/>
        <Route path='/blog' component={Stars}/>
    </Switch>
)

ReactDOM.render(

       <App>
           <IRouter/>
       </App>
,
    document.getElementById('root'));
registerServiceWorker();
