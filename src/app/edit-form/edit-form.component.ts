import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../Item';
import { CATEGORY_SELECT } from '../CategorySelect';

@Component({
  selector: 'edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent {
  // TODOS
  // drop-down menu is selected by existing value
  // 'listed'/'happyHour' values are checked
  // based on existing vlues

  @Output() cancelEdit = new EventEmitter();

  @Input() editItem!: Item;

  categorySelect = CATEGORY_SELECT;

  constructor() { }

  onSubmit() {
    console.log('submitted')
  }

  onCancel() {
    this.cancelEdit.emit()
  }

}
