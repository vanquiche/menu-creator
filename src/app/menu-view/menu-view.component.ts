import { Component, Renderer2} from '@angular/core';
import { MenuService } from '../menu.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.css']
})
export class MenuViewComponent {

  menu = this.menuService.getMenu();

  styles!: {
    format?: string ,
    font?: string,
    pricing?: string
  }

  constructor(private menuService: MenuService) { }

  checkValue(val: any) {
    this.styles = {...val}
    console.log(this.styles)
  }

}
