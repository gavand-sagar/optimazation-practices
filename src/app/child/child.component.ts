import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { RepeatStringPipe } from "../repeat-string.pipe";

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, RepeatStringPipe],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {

  ChildClick() {
    this.childValue++;
  }


  @Input()
  value: number = 0;
  childValue: number = 9;

  constructor(private ref:ChangeDetectorRef) {

  }

}
