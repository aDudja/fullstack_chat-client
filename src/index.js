import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import thunk from "redux-thunk";
import './index.css';
import createSagaMiddleware from 'redux-saga'
import App from './App';
import {compose, createStore, applyMiddleware} from "redux";
import {rootReducer} from "./redux/rootReducer";
import {sagaWatcher} from "./redux/sagas";

const saga = createSagaMiddleware()

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk, saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

saga.run(sagaWatcher)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));

