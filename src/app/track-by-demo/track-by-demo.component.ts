import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-track-by-demo',
  standalone: true,
  imports: [CommonModule, ScrollingModule],
  templateUrl: './track-by-demo.component.html',
  styleUrl: './track-by-demo.component.css'
})
export class TrackByDemoComponent implements OnInit {
  updateItems() {
    this.items = this.items.map(x => x + " Superman ")
  }

  ngOnInit(): void {
    this.loadThousandValues()
  }

  trackByFn(index: number, item: any) {
    return index
  }


  loadThousandValues() {
    // let arr = [];
    let count = this.items.length;
    for (let i = 0; i < 1000; i++) {
      this.items.push(i.toString())
    };

  }

  items: string[] = [];


}
