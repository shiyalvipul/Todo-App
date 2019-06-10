import * as actionTypes from './actionTypes';

const initialState = {
  todo: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        todo: [
          ...state.todo,
          {
            id: +new Date(),
            title: payload,
            isDone: false,
            isRemoved: false,
          },
        ],
      };
    case actionTypes.REMOVE_TODO:
      return {
        ...state,
        todo: state.todo
          .map(todo => (todo.id === payload ? { ...todo, isRemoved: true } : todo)),
        // todo: state.todo.filter((todo) => todo.id !== payload)
      };
    case actionTypes.CHECK_TODO:
      return {
        ...state,
        todo: state.todo
          .map(todo => (todo.id === payload.id ? { ...todo, isDone: payload.checked } : todo)),
      };
    default:
      return state;
  }
};
