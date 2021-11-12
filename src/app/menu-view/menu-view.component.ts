import { Component, OnInit} from '@angular/core';
import { MenuService } from '../menu.service';
import { Observable } from 'rxjs';
import { Item } from '../Item';

@Component({
  selector: 'menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.css']
})
export class MenuViewComponent implements OnInit {

  menu!: Observable<Item[]>;
  styles!: {
    format?: string ,
    font?: string,
    pricing?: string
  }

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menu = this.menuService.menu$
  }

  checkValue(val: any) {
    this.styles = {...val}
    console.log(this.styles)
  }

}
