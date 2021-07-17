import { Component, OnInit } from '@angular/core';
import { offers } from '../offer';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {
  offers = offers;
  offer: {destition:string, duration?:string, price:string, image?:string} = {destition : "",price:""};
  constructor(private route: ActivatedRoute ,private CS: CartService) {
   }

   addToCart(prod :any){
     alert("this item is added to the cart");
     this.CS.addToCart(prod);
     //console.log(this.CS.getItems());
   }
   
  ngOnInit(): void {
   
  }

}


