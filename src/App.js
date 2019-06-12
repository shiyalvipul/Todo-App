import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { TodoContainer } from './modules/todos';
import reduxStore from './store';
import './assets/styles/app.sass';

const App = () => (
  <Provider store={reduxStore}>
    <TodoContainer />
  </Provider>
);

export default App;
