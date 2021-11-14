import { Injectable } from '@angular/core';
import { Item } from './Item';
import { MENU } from './MenuDB';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private menu: Item[] = [...MENU];
  private _menu = new BehaviorSubject<Item[]>(this.menu);
  readonly menu$ = this._menu.asObservable();

  
  constructor() {

  }

  findIndex(refId: string): number {
    let index!: number;
    for (const item of this.menu) {
      if (item.id === refId) {
        index = this.menu.indexOf(item);
      }
    }
    return index;
  }

  addItem(item: Item) {
    this.menu.unshift(item);

    this._menu.next(Object.assign([], this.menu));
  }

  editItem(item: Item, id: any) {
    // todo
    let index = this.findIndex(id);
    this.menu[index] = item;

    this._menu.next(Object.assign([], this.menu));
  }

  deleteItem(id: string) {
    // todo
    let index: number = this.findIndex(id);
    if (index > -1) {
      this.menu.splice(index, 1);
    }
    this._menu.next(Object.assign([], this.menu));
  }

  updateListStatus(request: any) {
    this.menu.forEach((item) => {
      if (item.id === request.id) {
        item.listed = !item.listed;
      }
    });
    this._menu.next(Object.assign([], this.menu));
  }

  updateHappyHourStatus(request: any) {
    this.menu.forEach((item) => {
      if (item.id === request.id) {
        item.happyHour = !item.happyHour;
      }
    });
    this._menu.next(Object.assign([], this.menu));
  }
}
