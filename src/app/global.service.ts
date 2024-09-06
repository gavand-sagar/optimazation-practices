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
    // let value = localStorage && localStorage.getItem("counter") ? Number(localStorage.getItem("counter")) : 0
    let value = 0;
    this.counterSubject = new BehaviorSubject(value);
    this.counterSubject.subscribe(x => {
      localStorage.setItem("counter", x.toString())
    })
  }

  incrementCounter() {
    this.counterSubject.next(this.counterSubject.value + 1)
  }

  cancelAllSubscription() {
    this.counterSubject.unsubscribe();
  }

}
