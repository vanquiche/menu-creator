import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { Style } from './UserStyle';

@Injectable({
  providedIn: 'root',
})
export class StyleService {
  defaultStyle = {
    format: 'wide',
    font: 'classic',
    pricing: '1.2-2',
  };
  subject = new BehaviorSubject<Style>(this.defaultStyle);

  constructor() {}

  getStyle(): Observable<Style> {
    return this.subject.asObservable();
  }

  setStyle(style: Style) {
    this.subject.next(style);
  }
}
