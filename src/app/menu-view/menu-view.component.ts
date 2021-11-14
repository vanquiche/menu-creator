import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Item } from '../Item';
import { CATEGORY_SELECT } from '../CategorySelect';

@Component({
  selector: 'menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.css'],
})
export class MenuViewComponent implements OnInit {
  menu!: Observable<Item[]>;
  categorized!: Observable<Item[]>;
  category = CATEGORY_SELECT;

  styles!: {
    format?: string;
    font?: string;
    pricing?: string;
  };

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    // returns only items that are listed
    this.menu = this.menuService.menu$.pipe(
      map((menu) => menu.filter((item) => item.listed === true))
    );

    this.categorized = this.menuService.menu$.pipe(tap(result => {
      result.sort((a, b): any => {
        return a.price < b.price ? -1 : 1
      })
    }))

  }

  checkValue(val: any) {
    this.styles = { ...val };
    console.log(this.styles);
  }
}
