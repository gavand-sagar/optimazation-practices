import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { CommonModule } from '@angular/common';
import { GlobalService } from './global.service';
import { TrackByDemoComponent } from "./track-by-demo/track-by-demo.component";
import { ObservablesDemoComponent } from "./observables-demo/observables-demo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent, CommonModule, TrackByDemoComponent, ObservablesDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // value = 0;

  // handleClick() {
  //   this.value++;
  //   this.service.user.next("guest")
  // }

  // title = 'optimazation-practices';

  /**
   *
   */
  constructor(private service:GlobalService) {
    // setInterval(() => {
    //   this.value++
    // }, 1000)
  }
}
