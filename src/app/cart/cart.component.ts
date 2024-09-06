import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cartValue = 0;

  constructor(private service: GlobalService) {

    this.service.counter$.subscribe(x => {
      this.cartValue = x;
    })

  }
}
