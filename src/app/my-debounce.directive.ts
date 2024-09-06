import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { debounceTime, map, Subject, timer } from 'rxjs';

@Directive({
  selector: '[appMyDebounceClick]',
  standalone: true
})
export class MyDebounceDirective {

  clicks = new Subject<Event>();

  @Input()
  debounceTime: number = 400;

  @Output()
  debouceClick: EventEmitter<Event> = new EventEmitter<Event>();

  constructor() {

    this.clicks.pipe(debounceTime(this.debounceTime)).subscribe(x => {
      this.debouceClick.emit(x)
    })

  }

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    event.preventDefault();
    this.clicks.next(event)
  }


}
