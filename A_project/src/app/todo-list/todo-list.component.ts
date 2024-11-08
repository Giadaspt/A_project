import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo-item/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() todos!: Todo[];

  constructor(){

  }

  ngOnInit(): void {
    
  }
}



// export class TodoListComponent implements OnInit {

//   todos: Todo[];

//   constructor(){

//     this.todos= [
//       new Todo( "1", "Task 1", "2"),
//       new Todo( "2", "Task 2", "5"),
//       new Todo( "3", "Task 3", "1"),
//       new Todo( "4", "Task 4", "4"),
//       new Todo( "5", "Task 5", "3"),
//     ]

//     // this.todos = [
//     //   { id: "1", desc:"Task 1", date: new Date(), priority: 2, completed: false },
//     //   { id: "2", desc:"Task 2", date: new Date(), priority: 5, completed: false },
//     //   { id: "3", desc:"Task 3", date: new Date(), priority: 1, completed: false },
//     //   { id: "4", desc:"Task 4", date: new Date(), priority: 4, completed: false },
//     //   { id: "5", desc:"Task 5", date: new Date(), priority: 3, completed: false }
//     // ];

//   }

//   ngOnInit(): void {
    
//   }
// }
