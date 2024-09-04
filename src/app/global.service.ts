import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public user:BehaviorSubject<string> = new BehaviorSubject("admin")

  constructor() {

  }
}
