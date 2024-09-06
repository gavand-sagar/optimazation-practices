import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, forkJoin, merge, mergeMap, Observable, Subject, tap } from 'rxjs';

@Component({
  selector: 'app-observable-combine-and-fork',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './observable-combine-and-fork.component.html',
  styleUrl: './observable-combine-and-fork.component.css'
})
export class ObservableCombineAndForkComponent {
  changeValue1() {
    this.counter1.next(this.counter1.value + 1)
  }

  changeValue2() {
    this.counter2.next(this.counter2.value + 100)
  }

  counter1: BehaviorSubject<number>;
  counter2: BehaviorSubject<number>;
  obs3$: Observable<any>
  /**
   *
   */
  constructor(private http: HttpClient) {
    this.counter1 = new BehaviorSubject<number>(0);
    this.counter2 = new BehaviorSubject<number>(100);

    this.obs3$ = merge(
      this.counter1,
      this.counter2
    )
  }

}
