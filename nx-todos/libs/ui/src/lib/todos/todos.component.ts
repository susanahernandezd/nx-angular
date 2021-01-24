import { Component, Input } from '@angular/core';
import { Todo } from '@nx-todos/data';

@Component({
  selector: 'nx-todos-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  @Input() todos: Todo[];

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

}
