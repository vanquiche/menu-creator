import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Observable, from } from 'rxjs';
import { Item } from '../Item';
import { map } from 'rxjs/operators';

@Component({
  selector: 'menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.css'],
})
export class MenuViewComponent implements OnInit {
  menu!: Observable<Item[]>;
  styles!: {
    format?: string;
    font?: string;
    pricing?: string;
  };

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    // returns only items that are listed
    this.menu = this.menuService.menu$.pipe(
      map((data) => data.filter((item) => item.listed === true))
    );
  }

  checkValue(val: any) {
    this.styles = { ...val };
    console.log(this.styles);
  }
}
