import { Injectable, SimpleChanges } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  cart_value: number = 0;
  cart_items_list: Array<any> = [];

  // get_cart_value() {
  //   return this.cart_value;
  // }
}
