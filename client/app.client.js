import React from 'react';
import ReactDOM from 'react-dom';
import Layout from 'components-page/layout';
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <Layout />
    </Provider>
    ,
    document.getElementById('root'));