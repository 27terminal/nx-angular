import { createAction, props } from '@ngrx/store';
import { TodosEntity } from './todos.models';

export const init = createAction('[Todos Page] Init');

export const loadTodosSuccess = createAction(
  '[Todos/API] Load Todos Success',
  props<{ todos: TodosEntity[] }>()
);

export const loadTodosFailure = createAction(
  '[Todos/API] Load Todos Failure',
  props<{ error: any }>()
);

export const increment = createAction('[Todos Component] Increment');
export const decrement = createAction('[Todos Component] Decrement');
export const reset = createAction('[Todos Component] Reset');
