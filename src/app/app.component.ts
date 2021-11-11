import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlurViewService } from './blur-view.service';
import { Subscription } from 'rxjs';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // TODOS
  // - create overlay to block UI upon add/edit item
  // - preview listed and happy-hour menu
  // - select different menu views
  // PROPERTIES
  @ViewChild('nav', { static: true }) navbar!: ElementRef;

  title = 'angular-menu';
  subscription!: Subscription;
  blurBG!: any;
  addFormActive!: any;
  editFormActive!: any;

  constructor(public router: Router, private blurUIservice: BlurViewService) {
    this.subscription = this.blurUIservice.getState().subscribe((val) => {
      switch (val) {
        case 'addform':
          this.addFormActive = true;
          break;
        case 'editform':
          this.editFormActive = true;
          break;
        case null:
          this.addFormActive = false;
          this.editFormActive = false;
          break;
      }
    });
  }
}
