import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-observables-demo',
  standalone: true,
  imports: [],
  templateUrl: './observables-demo.component.html',
  styleUrl: './observables-demo.component.css'
})
export class ObservablesDemoComponent  {

  myObservable;

  value1 = 0;
  value2 = 0;
  value3 = 0
  /**
   *
   */
  constructor() {
    this.myObservable = interval(1000);

    this.myObservable.subscribe(x => {
      this.value1 = x;
    });


    this.myObservable.subscribe(x => {
      this.value2 = x;
    })


  }

  Sub3() {
    this.myObservable.subscribe(x => {
      this.value3 = x;
    })
  }


}
