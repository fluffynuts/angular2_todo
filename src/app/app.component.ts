import { Component } from '@angular/core';

@Component({
  selector: 'todo-app',
  // templateUrl: './app.component.html',
  template: require('./app.component.html'),
  styleUrls: ['./app.component.css' ]
})
export class AppComponent {
  newTodoText: string;
  constructor() {
    this.newTodoText = '';
  }
  addTodo() {
    window.alert(this.newTodoText);
  }
}