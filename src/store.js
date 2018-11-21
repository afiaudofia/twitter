import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk'

const initialState = {};

const middleware = [
    thunk
];

const store = createStore(reducers, initialState, applyMiddleware(...middleware) );

export default store;
