import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Grid from '@material-ui/core/Grid';

import { TodoContainer, DonetodoContainer } from './modules/todos/components';
import reduxStore from './store';
// import './styles/_todoList.scss';
import './styles/export.scss';


const App = () => (
  <Provider store={reduxStore}>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TodoContainer />
      </Grid>
      <Grid item xs={6}>
        <DonetodoContainer />
      </Grid>
    </Grid>
  </Provider>
);

export default App;
