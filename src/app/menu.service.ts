import { Injectable } from '@angular/core';
import { Item } from './Item';
import { MENU } from './MenuDB';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menu: Item[] = [...MENU];
  constructor() { }

  findIndex() {
    // todo
  }

  addItem(item: Item) {
    this.menu.push(item);
  }

  getMenu() {
    return this.menu;
  }

  editMenu() {
    // todo
  }

  deleteMenu() {
    // todo
  }
}
