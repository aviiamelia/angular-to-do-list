import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() isChecked: boolean = false;
  @Input() itemName: string = '';
  @Output() checkboxChanged = new EventEmitter();
  @Output() onDelete = new EventEmitter();

  onCheckboxChange() {
    this.checkboxChanged.emit();
  }
  onListDelete() {
    this.onDelete.emit();
  }
  ngOnInit(): void {}
}
