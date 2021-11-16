import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { Item } from '../Item';
import { Style } from '../UserStyle';
import { CATEGORY_SELECT } from '../CategorySelect';

import { StyleService } from '../user-style.service';

@Component({
  selector: 'menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.css'],
})
export class MenuViewComponent implements OnInit {
  appetizer!: Observable<Item[]>;
  entree!: Observable<Item[]>;
  dessert!: Observable<Item[]>;
  cocktail!: Observable<Item[]>;
  beverage!: Observable<Item[]>;
  side!: Observable<Item[]>;

  category = CATEGORY_SELECT;

  styleSubscription!: Subscription;
  styles!: Style;

  constructor(
    private menuService: MenuService,
    private styleService: StyleService,
  ) {}

  ngOnInit() {
    // returns only items that are listed
    // sorted by category
    this.appetizer = this.menuService.menu$.pipe(
      map((menu) =>
        menu.filter(
          (item) => item.listed === true && item.category.name === 'appetizer'
        )
      )
    );
    this.entree = this.menuService.menu$.pipe(
      map((menu) =>
        menu.filter(
          (item) => item.listed === true && item.category.name === 'entree'
        )
      )
    );
    this.dessert = this.menuService.menu$.pipe(
      map((menu) =>
        menu.filter(
          (item) => item.listed === true && item.category.name === 'dessert'
        )
      )
    );
    this.cocktail = this.menuService.menu$.pipe(
      map((menu) =>
        menu.filter(
          (item) => item.listed === true && item.category.name === 'cocktail'
        )
      )
    );
    this.beverage = this.menuService.menu$.pipe(
      map((menu) =>
        menu.filter(
          (item) => item.listed === true && item.category.name === 'beverage'
        )
      )
    );
    this.side = this.menuService.menu$.pipe(
      map((menu) =>
        menu.filter(
          (item) => item.listed === true && item.category.name === 'side'
        )
      )
    );

    // initialize style values
    this.styleService.getStyle().subscribe((val) => (this.styles = val));
  }

  checkValue(val: any) {
    // set new values
    this.styleService.setStyle(val);

    // retrieve new values
    this.styleService.getStyle().subscribe((val) => (this.styles = val));
  }
}
