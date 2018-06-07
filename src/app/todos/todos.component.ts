import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/models/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  constructor() { }

  onAddTodo() {
    const todoNumber = this.todos.length + 1;
    const newTodo = new Todo(`Todo number ${todoNumber}`);
    this.todos.push(newTodo);
  }

  onRemoveTodo() {
    this.todos.pop();
  }

  onClearAll() {
    this.todos.length = 0;
  }

  ngOnInit() {
  }

}
