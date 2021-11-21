import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Item } from '../Item';
import { CATEGORY_SELECT } from '../CategorySelect';
import { MenuService } from '../menu.service';
import { BlurViewService } from '../blur-view.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css'],
})
export class EditFormComponent implements OnInit{
  // TODOS
  // drop-down menu is selected by existing value -- DONE
  // add ngModel to each input in form -- DONE

  @Output() cancelEdit = new EventEmitter();
  @Output() submitEdit = new EventEmitter<Item>();

  @Input() editItem!: Item;

  categorySelect = CATEGORY_SELECT;
  currentCategorySelection!: any;
  formActive: boolean = false;
  menu!: Observable<Item[]>;

  constructor(
    private menuService: MenuService,
    private blurUIservice: BlurViewService,
    public modalService: NgbModal
  ) {}

  ngOnInit() {
    this.menu = this.menuService.menu$;
  }

  onSubmit(data: any) {
    this.menuService.editItem(
      {
        id: this.editItem.id,
        category:
          this.currentCategorySelection === undefined
            ? this.editItem.category
            : this.currentCategorySelection,
        ...data.form.value,
      },
      this.editItem.id
    );

    this.formActive = false;
    this.blurUIservice.setState(null);
  }

  onCancel() {
    this.formActive = false;
    this.blurUIservice.setState(null)
  }
  openEditForm(item: Item, content: any) {
    this.editItem = item;
    this.formActive = true;
    this.blurUIservice.setState('editform');
    this.modalService.open(content, {backdrop: 'static', keyboard: false});
  }

  onChange(selection: string) {
    let position: number = this.editItem.category.position;
    switch(selection) {
      case 'appetizer':
        position = 0;
        break;
      case 'entree':
        position = 1;
        break;
      case 'dessert':
        position = 2;
        break;
      case 'cocktail':
        position = 3;
        break;
      case 'beverage':
        position = 4;
        break;
      case 'side':
        position = 5;
        break;
    }
    this.currentCategorySelection = {name: selection, position};

  }


}

