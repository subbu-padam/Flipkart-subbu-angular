import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cart-value',
  templateUrl: './cart-value.component.html',
  styleUrls: ['./cart-value.component.scss']
})
export class CartValueComponent implements OnInit {

  @Input("value") cart_value: number;
  @Input("value1") sample_value: number;

  constructor() { }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log("ngOnChanges called");
  // }

  ngOnInit() {
    // console.log("ngOnInit called");
  }

  // ngDoCheck() {
  //   console.log("ngDocheck called")
  // }

  // ngAfterContentInit(){
  //   console.log("ngAfterContentInit called");
  // }

  // ngAfterContentChecked() {
  //   console.log("ngAfterContentChecked called");
  // }

  // ngAfterViewInit() {
  //   console.log("ngAfterViewIntit called");
  // }

  // ngAfterViewChecked() {
  //   console.log("ngAfterViewChecked called")
  // }

  // ngOnDestroy() {
  //   console.log("ngOnDestroy called");
  // }

}
