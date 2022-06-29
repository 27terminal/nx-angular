import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from './+state/todos.actions';
import { TodosEntity } from './+state/todos.models';

interface Todo {
  title: string;
}

@Component({
  selector: 'angular-pro-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

  title = 'todos';

  todo$: Observable<TodosEntity>;
  todo!: TodosEntity;

  constructor(private store: Store<{ todoStore: TodosEntity }>) {
    this.todo$ = store.select('todoStore');
    this.todo$.subscribe((res) => {
      console.log(res);
      this.todo = res;
    });
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
