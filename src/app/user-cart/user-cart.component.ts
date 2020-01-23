import { items_list } from './../data';
import { CommonService } from './../common/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss']
})
export class UserCartComponent implements OnInit {

  cart_list : Array<any> = [];
  constructor(public common: CommonService) { }

  ngOnInit() {
    this.cart_list = [];
    var cart_list_ids = this.common.cart_items_list;
    for (let item of items_list) {
      if(cart_list_ids.includes(item['S.No'])) {
        this.cart_list.push(item);
      }
    }
  }

  ngDoCheck() {
    this.cart_list = [];
    var cart_list_ids = this.common.cart_items_list;
    for (let item of items_list) {
      if(cart_list_ids.includes(item['S.No'])) {
        this.cart_list.push(item);
      }
    }
  }

  deletItem(item_id: number) {
    let item_index;
    for (let index in this.common.cart_items_list) {
      if (this.common.cart_items_list[index] == item_id) {
        item_index = index
      }
    }
    this.common.cart_items_list.splice(item_index, 1);
  }

}
