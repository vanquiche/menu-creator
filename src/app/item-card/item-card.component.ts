import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../Item';

@Component({
  selector: 'item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css'],
})
export class ItemCardComponent {

  @Input() item!: Item;
  @Output() deleteItem = new EventEmitter<string>();
  @Output() editItem = new EventEmitter<Item>();
  @Output() updateItem = new EventEmitter();

  constructor() {}

  onDelete(id: any) {
    this.deleteItem.emit(id);
  }

  onEdit(item: Item) {
    this.editItem.emit(item);
  }

  handleCheck(id?: string, selection?: string, value?: boolean) {
    this.updateItem.emit({
      id,
      selection,
      value
    });
  }
}
