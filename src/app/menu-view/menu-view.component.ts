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
  category = CATEGORY_SELECT;

  styles!: {
    format?: string;
    font?: string;
    pricing?: string;
  };

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    // returns only items that are listed
    this.menu = this.menuService.menu$

  }

  checkValue(val: any) {
    this.styles = { ...val };
    console.log(this.styles);
  }
}
