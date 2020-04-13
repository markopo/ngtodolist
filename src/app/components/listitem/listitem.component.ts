import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../../../entity/todo';

@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.scss']
})
export class ListitemComponent implements OnInit {

  @Input() todo: Todo;

  @Output() emitDelete: EventEmitter<Todo> = new EventEmitter<Todo>();

  @Output() emitChecked: EventEmitter<Todo> = new EventEmitter<Todo>();

  isCheckedCssClass = '';

  constructor() { }

  ngOnInit() {
    //
  }

  clickChecked(e: any) {
     console.log('click checked: ', e);
     this.todo.done = !this.todo.done;
     this.isCheckedCssClass = this.todo.done ? 'is-checked' : '';
     this.emitChecked.emit(this.todo);
  }

  clickDelete(e: any) {
      console.log('clickDelete: ', e);
      this.emitDelete.emit(this.todo);
  }



}
