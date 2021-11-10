import { Component } from '@angular/core';
import { Item } from './Item';
import { Update } from './UpdateReqest';
import { Router } from '@angular/router';
import { MENU } from './MenuDB';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // TODOS
  // - create overlay to block UI upon add/edit item
  // - preview listed and happy-hour menu
  // - select different menu views
  constructor(public router: Router, private menuService: MenuService) {}

  // PROPERTIES
  title = 'angular-menu';
  openForm = false;
  editForm = false;

  // container to store the item user intends to edit
  selectedEditItem!: Item;
  menu = this.menuService.getMenu();

  // METHODS

  // toggle visibility of forms
  toggleForm() {
    this.openForm = !this.openForm;
  }
  closeEditForm() {
    this.editForm = false;
  }
  // opens edit form and populates fields
  // with data from selected Item
  openEditForm(item: Item) {
    this.selectedEditItem = item;
    this.editForm = true;
  }

  addToMenu(item: Item) {
    this.menuService.addItem(item);
    this.openForm = false;
  }

  deleteFromMenu(id: string) {
    this.menuService.deleteItem(id);
  }

  submitEdit(item: any) {
    this.menuService.editItem(item, item.id);
    this.editForm = false;
  }

  // updates boolean value of 'listed'/'happyHour'
  updateBoolean(request: Update) {
    this.menuService.updateStatus(request);
  }
}
