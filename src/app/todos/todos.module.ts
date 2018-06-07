import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodoComponent } from './todo/todo.component';
import { TodoControlsComponent } from './todo-controls/todo-controls.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [TodosComponent],
  declarations: [TodosComponent, TodoComponent, TodoControlsComponent]
})
export class TodosModule { }
