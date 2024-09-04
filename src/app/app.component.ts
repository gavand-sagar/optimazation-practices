import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  value = 0;
  handleClick() {
    this.value++
  }
  title = 'optimazation-practices';

  /**
   *
   */
  constructor() {
    setInterval(() => {
      this.value++
    }, 1000)
  }
}
