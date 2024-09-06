import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GlobalService } from '../global.service';
import { confirmFirst, logOnError } from './decorators';

@Component({
  selector: 'app-decorators-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './decorators-demo.component.html',
  styleUrl: './decorators-demo.component.css'
})
export class DecoratorsDemoComponent {


  value: boolean = false;

  getService() {
    return this.service
  }

  /**
   *
   */
  constructor(public service: GlobalService) {

  }

  @confirmFirst({
    message: "Are you sure?"
  })
  handleClick() {
    console.log("Method logic")
    // this.value = !this.value;
  }


  handleClick2() {
    console.log("Method2 logic")
    // this.value = !this.value;
  }

}
