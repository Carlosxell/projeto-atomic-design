import { ADD_TODO, DELETE_TODO, CHANGE_TODO_STATUS } from '../actions/types';

const initialState = {
  list: [],
};

export const todos = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        list: state.list.concat(action.todo)
      };

    case DELETE_TODO:
      return {
        ...state,
        list: state.list.filter(res => (res.id !== action.todo.id))
      };

    default:
      return state;
  }
};
