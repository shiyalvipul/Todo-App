import * as actionTypes from './actionTypes';

const localState = JSON.parse(localStorage.getItem('todoLocalStore'));

const todoLocalStore = !localState ? [] : localState;
const initialState = {
  todos: todoLocalStore,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: +new Date(),
            title: payload,
            isDone: false,
            // isRemoved: false,
          },
        ],
      };
    case actionTypes.REMOVE_TODO:
      return {
        ...state,
        // todo: state.todo
        //   .map(todo => (todo.id === payload ? { ...todo, isRemoved: true } : todo)),
        todos: state.todos.filter(todo => todo.id !== payload),
      };
    case actionTypes.CHECK_TODO:
      return {
        ...state,
        todos: state.todos
          .map(todo => (todo.id === payload.id ? { ...todo, isDone: payload.checked } : todo)),
      };
    default:
      return state;
  }
};
