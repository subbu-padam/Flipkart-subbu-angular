import { HomeComponent } from './../home/home.component';
import { CommonService } from './../common/common.service';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchvalue: string;
  constructor(public router: Router, 
    public common: CommonService) { }

  cart_value: number = this.common.cart_value;
  
  ngDoCheck() {
    this.cart_value = this.common.cart_value;
  }

  rote_to_home_page() {
    this.router.navigate(['/itemDetail']);
  }

  ngOnInit() {
    // console.log("cart value is: ", this.common.get_cart_value());
  }

}
