import { ADD_TODO, DELETE_TODO, CHANGE_TODO_STATUS } from '../actions/types';

export const handleAddTodo = (val) => (dispatch) => {
  dispatch({ type: ADD_TODO, todo: val });
};

export const handleDeleteTodo = (val) => (dispatch) => {
  dispatch({ type: DELETE_TODO, todo: val });
};

export const handleTodoStatus = (val) => (dispatch) => {
  dispatch({ type: CHANGE_TODO_STATUS, todo: val });
};
