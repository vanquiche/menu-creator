import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../Item';
import { CATEGORY_SELECT } from '../CategorySelect';
import { Category } from '../Category';
import { MenuService } from '../menu.service';
import { Update } from '../UpdateReqest';

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
  activeForm: boolean = false;
  menu = this.menuService.getMenu();

  constructor(private menuService: MenuService) {}

  onSubmit(data: any) {
    this.menuService.editItem({
      id: this.editItem.id,
      category:
        this.currentCategorySelection === undefined
          ? this.editItem.category
          : this.currentCategorySelection,
      ...data.form.value,
    }, this.editItem.id);
    this.activeForm = false;
  }

  onCancel() {
    this.activeForm = false;
  }
  openEditForm(item: Item) {
    this.activeForm = true;
    this.editItem = item;
  }

  onChange(selection: any) {
    this.currentCategorySelection = selection;
  }



}

