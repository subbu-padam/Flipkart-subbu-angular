import { items_list } from './../data';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  itemId: number;
  item_details: any;
  item_keys: Array<any> = [];
  item_values: Array<any> = [];

  constructor(public route: ActivatedRoute) {
    this.route.params.subscribe(data => {
      console.log(data);
      this.itemId = Number(data['item_id']);
      for(let item of items_list) {
        if(item['S.No'] == this.itemId) {
          this.item_details = item;
          console.log(this.item_details);
          this.item_keys = Object.keys(this.item_details);
          this.item_values = Object.values(this.item_details);
          break;
        }
      }
    })
  }

  ngOnInit() {
  }

}
