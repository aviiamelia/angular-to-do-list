import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todoList = ['lavar roupa', 'ir ao mercado', 'assistir série'];
  title = 'to-do-list';
}
