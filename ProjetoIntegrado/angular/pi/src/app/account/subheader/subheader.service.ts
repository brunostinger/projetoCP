import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubheaderService {
  public subHeaderTitle = new BehaviorSubject('Title')
  constructor() { }

  setTitle(subHeaderTitle : string) {
    this.subHeaderTitle.next(subHeaderTitle);
  }
}
