import { Component } from '@angular/core';
import { CATEGORY_SELECT } from '../CategorySelect';
import { MenuService } from '../menu.service';

@Component({
  selector: 'item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css'],
})
export class ItemFormComponent {

  // Properties
  // loop over for select drop-down menu
  categorySelect = CATEGORY_SELECT;

  formActive: boolean = false;

  constructor(private menuService: MenuService) { }
  // Methods
  openForm() {
    this.formActive = true;
  }

  closeForm() {
    this.formActive = false;
  }

  onSubmit(data: any) {
    // assign id to object
    data.form.value.id = new Date().toISOString();
    // send form data to parent
    this.menuService.addItem(data.form.value);
    // reset form back to default
    data.reset();
    this.formActive = false;
  }


}
