import { combineReducers } from 'redux';
import todoReducer from '../modules/todos/redux/reducer';

const appReducer = combineReducers({
  todo: todoReducer,
});
export default appReducer;
