import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlurViewService {
  subject = new Subject<any>();

  constructor() {}

  getState(): Observable<any> {
    return this.subject.asObservable()
  }

  setState(val: any) {
    this.subject.next(val);
  }
}
