import { combineReducers } from 'redux';
import { todos } from './todos'

export const Reducers = combineReducers({
  todos: todos,
});
