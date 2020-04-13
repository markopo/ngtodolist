import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Todo, TodoFactory} from '../../../entity/todo';
import {Observable} from 'rxjs';
import {LocalStorageService} from '../../../services/localstorageservice';
import {todoListKey} from '../../../constants/localstoragekeys';

@Component({
  selector: 'app-listcontainer',
  templateUrl: './listcontainer.component.html',
  styleUrls: ['./listcontainer.component.scss']
})
export class ListcontainerComponent implements OnInit, OnChanges {

  @Input() todo: Todo;

  todos: Todo[] = [];

  constructor(private localStorageService: LocalStorageService) {


    const savedTodos = this.localStorageService.get(todoListKey);

    if (savedTodos !== null) {
        try {
          this.todos = savedTodos as Todo[];
        } catch (e) {
            console.log('error: ', e);
            this.todos = [];
        }

    }
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log('changes: ', changes);

      const {
         todo
      } = changes;


      if (todo && todo.currentValue) {
          const currentTodo: Todo = todo.currentValue;

          if (!this.todos.find(x => x.id === currentTodo.id)) {
              this.todos.push(currentTodo);
              this.localStorageService.set(todoListKey, this.todos);
          }
      }

  }

  emitDeleteTodo(todo: Todo) {
      console.log('emitDeleteTodo: ', todo);

      const selectedIndex = this.todos.findIndex(x => x.id === todo.id);

      if (selectedIndex > -1) {
          this.todos.splice(selectedIndex, 1);
          this.localStorageService.set(todoListKey, this.todos);
      }
  }

  emitCheckTodo(todo: Todo) {
      console.log('emitCheckedTodo: ', todo, this.todos.find(x => x.id === todo.id));
      this.localStorageService.set(todoListKey, this.todos);
  }
}
