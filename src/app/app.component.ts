import { Component } from '@angular/core';
import { Item } from './Item';
import { Update } from './UpdateReqest';
import { Router } from '@angular/router';
import { MENU } from './MenuDB';

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
  constructor(public router: Router) {}

  // PROPERTIES
  title = 'angular-menu';
  // controls visibility of 'item-form'
  openForm = false;
  // controls visibility of 'edit-form'
  editForm = false;
  // container to store the item user intends to edit
  selectedEditItem!: Item;

  menu = MENU;

  // METHODS
  findIndex(refId: string): number {
    let index!: number;
    for (const item of this.menu) {
      if (item.id === refId) {
        index = this.menu.indexOf(item);
      }
    }
    return index;
  }

  toggleForm() {
    this.openForm = !this.openForm;
  }

  addToMenu(item: Item) {
    // receive form-data from child
    this.menu.push(item);
    this.openForm = false;
  }

  deleteFromMenu(id: string) {
    let index: number = this.findIndex(id);
    if (index > -1) {
      this.menu.splice(index, 1);
    } else throw new Error('could not find Item to delete');
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

  submitEditMenu(item: any) {
    let index: number = this.findIndex(item.id);
    this.menu[index] = item;
    this.editForm = false;
  }

  // updates boolean value of 'listed'/'happyHour'
  updateBoolean(request: Update) {
    // request structure:
    // ex. {id: '001', selection: 'listed', value: true}

    let index: number = this.findIndex(request.id);
    switch (request.selection) {
      case 'listed':
        this.menu[index].listed = !request.value;
        break;
      case 'happyHour':
        this.menu[index].happyHour = !request.value;
        break;
    }
  }

  // end
}
