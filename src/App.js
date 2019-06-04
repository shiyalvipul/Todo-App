import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Todo from './modules/todos/components/Todo';
import { reduxStore } from './store';
import './styles/_todoList.scss';



const  App = () =>  {
  return (
    <Provider store={reduxStore}>
       <Todo></Todo>
    </Provider>
  );
}

export default App;
