/**
 * Created by Xiaotao.Nie on 22/1/2017.
 * All right reserved
 * IF you have any question please email onlythen@yeah.net
 */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './common/containers/App'
import configureStore from './common/store/configStore'

const store = configureStore();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
