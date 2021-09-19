import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthDataService {
  me = new BehaviorSubject<any>(null);

  setMe(data: any) {
    this.me.next(data);
  }

  constructor() {}
}
