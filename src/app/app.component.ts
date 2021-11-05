import { Component } from '@angular/core';
import { Item } from './Item';
import { Update } from './UpdateReqest';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // PROPERTIES
  title = 'angular-menu';
  // controls visibility of 'item-form'
  openForm = false;
  // controls visibility of 'edit-form'
  editForm = false;
  // container to store the item user intends to edit
  selectedEditItem!: Item;

  menu: Item[] = [
    {
      id: '001',
      name: 'Chicken Teriyaki',
      price: 12.79,
      description:
        'Marinated with a sweet glaze, grilled to perfection, served with side salad.',
      category: 'entree',
      listed: false,
      happyHour: true,
    },
  ];

  toggleForm() {
    this.openForm = !this.openForm;
  }

  addToMenu(item: Item) {
    // receive form-data from child
    this.menu.push(item);
  }

  deleteFromMenu(id: string) {
    let index!: number;
    for (const item of this.menu) {
      if (item.id === id) {
        index = this.menu.indexOf(item);
        break;
      }
    }
    if (index > -1) {
      this.menu.splice(index, 1);
    } else throw new Error('could not find Item to delete');
  }

  closeEditForm() {
    this.editForm = false;
  }

  editMenuItem(item: Item) {
    let index!: number;
    for (const ref of this.menu) {
      if (ref.id === item.id) {
        index = this.menu.indexOf(ref);
        break;
      }
    }
    console.log(this.menu[index]);
    this.selectedEditItem = item;
    this.editForm = true;
  }

  // updates boolean value of 'listed'/'happyHour'
  updateMenu(request: Update) {
    // request structure:
    // ex. {id: '001', selection: 'listed', value: true}

    let index!: number;
    for (const item of this.menu) {
      if (item.id === request.id) {
        index = this.menu.indexOf(item);
        break;
      }
    }
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
