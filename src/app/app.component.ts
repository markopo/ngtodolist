import { Component } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Todo} from '../entity/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngtodoapp';

  addFormIsVisible = false;

  addedTodo: Todo = null;

  constructor() {

  }

  clickAddTodo() {
      this.addFormIsVisible = true;
  }

  emitAddFormIsVisible(show: boolean) {
     this.addFormIsVisible = show;
  }

  emitSaveAddForm(todo: Todo) {
      this.addFormIsVisible = false;
      this.addedTodo = todo;
  }
}
