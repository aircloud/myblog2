/**
 * Created by Xiaotao.Nie on 23/1/2017.
 * All right reserved
 * IF you have any question please email onlythen@yeah.net
 */
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from '../common/store/configStore'
import App from '../common/containers/App'

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);
const rootElement = document.getElementById('app');

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootElement
);
