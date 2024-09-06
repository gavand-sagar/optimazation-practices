import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private counterSubject: BehaviorSubject<number>;
  public get counter$() {
    return this.counterSubject.asObservable();
  }

  constructor() {
    this.counterSubject = new BehaviorSubject(0);
  }

  incrementCounter() {
    this.counterSubject.next(this.counterSubject.value + 1)
  }

  cancelAllSubscription() {
    this.counterSubject.unsubscribe();
  }

}
