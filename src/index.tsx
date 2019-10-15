import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux'
import App from './AppNode/_/component';
import { configureStore } from './AppNode/_brain/store';

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
