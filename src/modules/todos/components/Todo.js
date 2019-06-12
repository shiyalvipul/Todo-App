import React from 'react';
import Grid from '@material-ui/core/Grid';

import DonetodoContainer from './done-todo-section/DoneTodoContainerSection';
import TodoContainer from './todo-section/TodoContainerSection';

const Todo = () => (
  <div>
    <Grid container spacing={1}>
      <Grid item xs={3}>
        <TodoContainer />
      </Grid>
      <Grid item xs={6}>
        <DonetodoContainer />
      </Grid>
    </Grid>
  </div>
);

export default Todo;
