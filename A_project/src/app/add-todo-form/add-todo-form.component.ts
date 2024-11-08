import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AddFormError } from './add-form-error.model';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.scss'],
})
export class AddTodoFormComponent implements OnInit {
  @Output() newTodo: EventEmitter<any> = new EventEmitter<any>();
  formError: AddFormError;

  constructor() {
    this.formError = new AddFormError();
  }

  ngOnInit(): void {}

  getInputClass() {
    let toRet = "input";

    if(this.formError.isError){
      toRet += "is-danger"
    }
  }

  checkForm(desc: string, priority: string): void {

    if (desc === '') {
      this.formError.isError = true;
      this.formError.descError = true;
      this.formError.descErrorMsg = 'Devi inserire una descrizione';
    }
    if (priority > '5' || priority < '1') {
      this.formError.isError = true;
      this.formError.priorityError = true;
      this.formError.priorityErrorMesg =
        'Devi inserire un numero compreso tra 1 e 5';
    }

  }

  onAddTodo(desc: HTMLInputElement, priority: HTMLInputElement) {
    const descValue = desc.value;
    const priorityValue = priority.value;

    this.checkForm(descValue, priorityValue);

    if (!this.formError.isError) {
      const newTodo = {
        desc: descValue,
        priority: priorityValue,
      };
      console.log(newTodo, 'newTask');
      console.log(desc.value, 'desc');
      console.log(priority.value, 'priority');

      this.newTodo.emit(newTodo);
      desc.value = '';
      priority.value = ' ';
    }
  }
}
