import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-controls',
  templateUrl: './todo-controls.component.html',
  styleUrls: ['./todo-controls.component.scss']
})
export class TodoControlsComponent implements OnInit {
  @Output() add = new EventEmitter<any>();
  @Output() remove = new EventEmitter<any>();
  @Output() clear = new EventEmitter<any>();

  constructor() { }

  addTodo() {
    this.add.emit(null);
  }

  removeTodo() {
    this.remove.emit(null);
  }

  clearAll() {
    this.clear.emit(null);
  }

  ngOnInit() {
  }

}
