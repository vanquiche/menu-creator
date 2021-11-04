import { Component } from '@angular/core';
import { Item } from './Item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-menu';
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

  pushToMenu(item: Item) {
    // receive form-data from child
    this.menu.push(item);
  }

  deleteFromMenu(id: string) {
    let index!: number;

    for (const item of this.menu) {
      if (item.id === id) {
        index = this.menu.indexOf(item);
      }
    }

    // console.log(index);
    if (index > -1) {
      this.menu.splice(index, 1);
    } else throw new Error('could not find Item to delete');
  }
}
