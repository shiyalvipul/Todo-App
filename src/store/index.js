import { createStore, applyMiddleware , compose } from 'redux'; 

import rootReducer from './rootReducer';
import {save, load} from 'redux-localstorage-simple';

export const reduxStore = createStore(
    rootReducer,
    // {},//Initial Value
    load(),
    compose(
        applyMiddleware(save()),   
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
         
    ),
    );

