import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {

  ChildClick() {
    this.childValue++;
    this.ref.reattach()
  }
  @Input()
  value: number = 0;
  childValue: number = 0;
  /**
   *
   */
  constructor(private ref:ChangeDetectorRef) {
    this.ref.detach()
    // setInterval(() => {
    //   this.childValue+=2
    // }, 1000)
  }

}
