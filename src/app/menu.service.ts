import { Injectable } from '@angular/core';
import { Item } from './Item';
import { MENU } from './MenuDB';
import { Update } from './UpdateReqest';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  menu: Item[] = [...MENU];

  constructor() {}

  findIndex(refId: string): number {
    let index!: number;
    for (const item of this.menu) {
      if (item.id === refId) {
        index = this.menu.indexOf(item);
      }
    }
    return index;
  }

  getListedMenu() {
    return this.menu.filter((item) => item.listed === true);
  }
  getHappyHourMenu() {
    return this.menu.filter(
      (item) => item.happyHour === true && item.listed === true
    );
  }
  getMenu() {
    return this.menu;
  }

  addItem(item: Item) {
    this.menu.push(item);
  }

  editItem(item: Item, id: any) {
    // todo
    let index = this.findIndex(id);
    this.menu[index] = item;
  }

  deleteItem(id: string) {
    // todo
    let index: number = this.findIndex(id);
    if (index > -1) {
      this.menu.splice(index, 1);
    } else throw new Error('could not find Item to delete');
  }

  updateStatus(request: any) {
    // request structure:
    // {id: '001', selection: 'listed', value: true}
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
}
