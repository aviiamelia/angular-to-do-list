import { Component } from '@angular/core';
import { Item } from './types/list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todoList: Item[] = [];
  title = 'to-do-list';
  toggleCheckBox(index: number) {
    this.todoList[index].isDone = !this.todoList[index].isDone;
    console.log(this.todoList);
  }
}
