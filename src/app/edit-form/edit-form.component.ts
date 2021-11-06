import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../Item';
import { CATEGORY_SELECT } from '../CategorySelect';
import { Category } from '../Category';

@Component({
  selector: 'edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css'],
})
export class EditFormComponent {
  // TODOS
  // drop-down menu is selected by existing value -- DONE
  // add ngModel to each input in form -- DONE

  @Output() cancelEdit = new EventEmitter();
  @Output() submitEdit = new EventEmitter<Item>();

  @Input() editItem!: Item;

  categorySelect = CATEGORY_SELECT;
  currentCategorySelection!: Category;

  constructor() {}

  onSubmit(data: any) {
    // console.log(data.form.value);
    this.submitEdit.emit({
      id: this.editItem.id,
      category: this.currentCategorySelection,
      ...data.form.value
    });
  }

  onCancel() {
    this.cancelEdit.emit();
  }

  onChange(selection: any) {
    this.currentCategorySelection = selection;
  }
}
