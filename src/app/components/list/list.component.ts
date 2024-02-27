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

  onCheckboxChange() {
    this.checkboxChanged.emit();
  }
  ngOnInit(): void {}
}
