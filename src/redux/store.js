import Vue from 'vue'
import Revue from 'revue'
import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import actions from 'redux/action';
import reducers from 'redux/reducer';

const logger = createLogger();

let middleware = __DEVELOPMENT__ ? [thunk, logger] : [thunk];

const createStoreWithMiddleware = createStore(
    combineReducers(reducers),
    {},
    applyMiddleware(...middleware)
);

export default new Revue(Vue, createStoreWithMiddleware, actions);
