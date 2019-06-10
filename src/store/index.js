import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';

import rootReducer from './rootReducer';

const reduxStore = createStore(
  rootReducer,
  {}, // Initial Value
  compose(
    applyMiddleware(),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  ),
);
export default reduxStore;
