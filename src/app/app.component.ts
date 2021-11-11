import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlurViewService } from './blur-view.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'angular-menu';
  subscription!: Subscription;
  addFormActive!: boolean;
  editFormActive!: boolean;

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
