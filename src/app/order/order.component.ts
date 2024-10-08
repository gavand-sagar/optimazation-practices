import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { GlobalService } from '../global.service';
import { catchError, debounceTime, filter, interval, map, mergeMap, Observable, of, scan, Subscription, take, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MyDebounceDirective } from '../my-debounce.directive';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MyDebounceDirective],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnDestroy {

  sendApiCall() {
    this.result = this.http.get(`https://dummyjson.com/products/1`)
  }
  // SubscriptionList: Subscription[] = [];

  UnSubMe() {
    // this.SubscriptionList.forEach(x => {
    //   x.unsubscribe();
    // })
  }


  SubMe() {
    //this.service.counterSubject
    //this.SubscriptionList.push(sub);
  }

  obj: Observable<number>;
  obj2: Observable<string>;
  obj3: Observable<number>;
  cartCounter: number = 0;
  result: Observable<any> = of({});
  timer: any = null;
  /**
   *
   */
  constructor(public service: GlobalService, private http: HttpClient) {
    this.obj = this.service.counter$.pipe(tap(x => {
      console.log("New value")
    }));

    this.obj2 = this.service.counter$.pipe(map(x => "@".repeat(x)));

    this.obj3 = this.service.counter$.pipe(filter(x => x % 2 == 0))




    // let sum = [3, 5, 5, 6].reduce((a, b) => a + b, 0)
    // this.result = this.service.counter$.pipe(debounceTime(400));


    // this.result = this.http.get("https://catfact.ninja/fact")
    // .pipe(
    //   mergeMap(x => {
    //     return this.http.get("https://dummyjson.com/products/categories")
    //   }))


  }


  callToApi() {
    this.http.get("https://catfact.ninja/fact");

    this.http.get("https://dummyjson.com/products/categories");



  }

  ngOnDestroy(): void {
    // this.SubscriptionList.forEach(x => {
    //   x.unsubscribe();
    // })
  }


  testFunction() {
    console.log("TEST FUNCTION")
  }
}
