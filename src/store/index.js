import { createStore, applyMiddleware , compose } from 'redux'; 

import rootReducer from './rootReducer';

export const reduxStore = createStore(
    rootReducer,
    {},
    compose(
        applyMiddleware(),   
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,

    ),
    );


