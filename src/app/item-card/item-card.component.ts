import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../Item';
import { MenuService } from '../menu.service';

@Component({
  selector: 'item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css'],
})
export class ItemCardComponent {

  @Input() item!: Item;
  @Output() openForm = new EventEmitter<Item>();

  constructor(private menuService: MenuService) {}

  onDelete(id: any) {
    this.menuService.deleteItem(id);
  }

  onEdit(item: Item) {
    this.openForm.emit(item);
  }

  handleCheck(id?: string, selection?: string, value?: boolean) {
    this.menuService.updateStatus({
      id,
      selection,
      value
    });
  }
}
