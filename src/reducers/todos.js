import { ADD_TODO, DELETE_TODO, UNCHECK_TODO, CHECK_TODO } from '../actions/types';

const initialState = {
  list: [],
};

export const todos = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      state.list.push(action.todo);
      return { ...state };

    default:
      return state;
  }
};
