import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
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
  //  - 'price' must be number
  //  -  no empty fields
  //  -  must select category

  @ViewChild('numberField', { static: true }) input!: ElementRef;
  @ViewChild('optionDefault', { static: true }) option!: ElementRef;
  @Output() sendItem = new EventEmitter<Item>();
  @Output() emitCloseForm = new EventEmitter();

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

  onClickClose() {
    this.emitCloseForm.emit();
  }

  onSubmit(data: any) {
    // assign id to object
    data.form.value.id = new Date().toISOString();
    // send form data to parent
    this.sendItem.emit(data.form.value);
    // reset form back to default
    data.resetForm();
    this.input.nativeElement.value = 1;
    this.option.nativeElement.selected = true;
  }
}
