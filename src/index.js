import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './components/app/App';
import {store} from './store';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';

const eshop = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)


ReactDOM.render(eshop, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
