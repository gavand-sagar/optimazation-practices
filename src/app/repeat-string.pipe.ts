import { ChangeDetectorRef, Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';
import { GlobalService } from './global.service';

@Component({
  selector: 'repeat-string',
  standalone: true,
  template: `{{ViewData}}`
})
export class RepeatStringPipe{

  @Input()
  value: number = 0;
  user = "";


  get ViewData():string{
    if(this.user == "admin"){
      return "$".repeat(this.value);
    }else{
      return "#".repeat(this.value);
    }
  }

  /**
   *
   */
  constructor(private service: GlobalService, private changeDetector: ChangeDetectorRef) {
    // this.service.user.subscribe(x => {
    //   this.user = x;
    //   this.changeDetector.detectChanges();
    // });
  }



}
