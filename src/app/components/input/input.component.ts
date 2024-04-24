import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/types/list';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() list: Item[] = [];
  formData = { todolist: '' };
  addNewItem(event: Event) {
    event.preventDefault();
    const item = { title: this.formData.todolist, isDone: false };
    this.list.push(item);
    this.formData.todolist = '';
    //test
  }
  constructor() {}

  ngOnInit(): void {}
}
