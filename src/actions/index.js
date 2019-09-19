import { ADD_TODO, DELETE_TODO, UNCHECK_TODO, CHECK_TODO } from '../actions/types';

export const handleAddTodo = (val) => (dispatch) => {
  dispatch({ type: ADD_TODO, todo: val });
};

export const handleDeleteTodo = (val) => (dispatch) => {
  dispatch({ type: DELETE_TODO, todo: val });
};

export const handleCheckTodo = (val) => (dispatch) => {
  dispatch({ type: CHECK_TODO, todo: val });
};

export const handleUncheckTodo = (val) => (dispatch) => {
  dispatch({ type: UNCHECK_TODO, todo: val });
};
