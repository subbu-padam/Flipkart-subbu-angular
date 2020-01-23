import { items_list } from './../data';
import { CommonService } from '../common/common.service';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public activated_params: ActivatedRoute,
    public common: CommonService) {
    this.activated_params.params.subscribe(data => {
      console.log(data['id']);
    })
  }

  items = items_list;
  items_length = items_list.length;
  limit = 10;
  category: string = "mens";
  show_items: Array<any> = [];

  ngOnInit() {
    let count = 0;
    for (let item of this.items) {
      if(count < this.limit) {
        this.show_items.push(item);
        count += 1;
      }else {
        break;
      }
    }
  }

  add_more(){
    this.limit += 10;
    this.show_items = [];
    let count = 0;
    for (let item of this.items) {
      if(count <= this.limit) {
        this.show_items.push(item);
        count += 1;
      }else {
        break;
      }
    }
  }

  addToCart(item: any) {
    this.common.cart_value += 1;
    this.common.cart_items_list.push(item['S.No']);
  }

  removeFromCart(item: any) {
    this.common.cart_value -= 1;
    
    let item_index;
    for (let index in this.common.cart_items_list) {
      if (this.common.cart_items_list[index] == item['S.No']) {
        item_index = index
      }
    }
    this.common.cart_items_list.splice(item_index, 1);
  }

  ngDoCheck() {
    // console.log(this.common.cart_value);
  }

  ngOnDestroy() {
    console.log("ngOnDestroy called on home page");
  }

}
