import { Component, Output, EventEmitter } from '@angular/core';
import { Item } from '../Item';
import { CATEGORY_SELECT } from '../CategorySelect';

@Component({
  selector: 'item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css'],
})
export class ItemFormComponent {
  // TODOS
  // create form validation
  // require fields
  // 'price' must be number

  @Output() sendItem = new EventEmitter<Item>();

  // Properties
  // loop over for select drop-down menu
  categorySelect = CATEGORY_SELECT;
  item: Item;

  constructor() {
    this.item = {
      name: '',
      price: 1,
      description: '',
      category: null,
      listed: false,
      happyHour: false,
    };
  }
  // Methods

  // updates category upon change
  onChange(value: any) {
    this.item.category = value;
  }

  onSubmit(data: any) {
    // send form data to parent
    data.form.value.id = new Date().toISOString();
    console.log(data.form.value)
    this.sendItem.emit(data.form.value);
    data.reset();
  }
}
