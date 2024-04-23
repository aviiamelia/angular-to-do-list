import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/types/list';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() list: Item[] = [];
  inputValue: string = '';
  onKey(event: Event) {
    this.inputValue = (event.target as HTMLInputElement).value;
  }
  addNewItem() {
    const item = { title: this.inputValue, isDone: false };
    this.list.push(item);
  }
  constructor() {}

  ngOnInit(): void {}
}
