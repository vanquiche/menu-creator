import { Component, Renderer2} from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.css']
})
export class MenuViewComponent {

  menu = this.menuService.getListedMenu();

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
