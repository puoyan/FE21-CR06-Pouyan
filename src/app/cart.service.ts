import { Injectable } from '@angular/core';
import { offers } from './offer';
@Injectable({
  providedIn: 'root'
})
export class CartService {
 items : any = [];
  constructor() { }

  addToCart(offer:any){
    this.items.push(offer);
  }

getItems(){
  return this.items;
}
// clearCart(){
//   this.items = [];
//   return this.items;
// }

}



