import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartValueComponent } from './cart-value.component';

describe('CartValueComponent', () => {
  let component: CartValueComponent;
  let fixture: ComponentFixture<CartValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
