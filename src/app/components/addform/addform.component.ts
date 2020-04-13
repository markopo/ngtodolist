import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Todo, TodoFactory} from '../../../entity/todo';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.scss']
})
export class AddformComponent implements OnInit, OnChanges {

  @Input() isVisible = false;

  @Output() emitClickClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() emitClickSave: EventEmitter<Todo> = new EventEmitter<Todo>();

  form: FormGroup;

  constructor() {

      this.form = new FormGroup({
            name: new FormControl('', [ Validators.required ])
      });
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
   // console.log('changes: ', changes);


  }

  clickClose() {
    this.emitClickClose.emit(false);
  }

  clickSave() {

      if (!this.form.valid) {
        return;
      }

      const {
        name
      } = this.form.value;

      const todo = TodoFactory.Create(name);

      this.emitClickSave.emit(todo);

      this.form.reset();

  }

}
