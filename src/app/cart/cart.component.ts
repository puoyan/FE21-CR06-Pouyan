import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart:any;
  constructor(private CS: CartService) { 
  }

  ngOnInit(): void {
    console.log(this.CS.getItems());
    
    this.cart = this.CS.getItems();
  }

}
