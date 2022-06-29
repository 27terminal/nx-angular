import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as TodoActions from './todo.actions';
import * as TodoFeature from './todo.reducer';

@Injectable()
export class TodoEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return TodoActions.loadTodoSuccess({ todo: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return TodoActions.loadTodoFailure({ error });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions) {}
}