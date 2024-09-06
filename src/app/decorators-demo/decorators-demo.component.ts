import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

function LogPropertyChange(target: any, propertyKey: string) {

  console.log("attaching property")
  let value = target[propertyKey];
  let getter = function () {
    console.log('reading')
    return value
  }
  let setter = function (new_value: any) {
    console.log('writing')
    value = new_value
  }

  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true
  })
}


@Component({
  selector: 'app-decorators-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './decorators-demo.component.html',
  styleUrl: './decorators-demo.component.css'
})
export class DecoratorsDemoComponent {

  @LogPropertyChange
  private value: boolean = false;

  // get value(){
  //   console.log('reading')
  //   return this._value
  // }
  // set value(v){
  //   console.log('writing')
  //   this._value = v;
  // }



  getService() {
    return this.service
  }

  /**
   *
   */
  constructor(public service: GlobalService) {

  }

  // @confirmFirst({
  //   message: "Are you sure?"
  // })
  handleClick() {
    console.log("Method logic");
    this.value = !this.value;
  }


  handleClick2() {
    console.log("Method2 logic")
    // this.value = !this.value;
  }

}
