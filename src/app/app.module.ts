import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CustomStyleDirective } from './custom-style.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { CartValueComponent } from './cart-value/cart-value.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CustomStyleDirective,
    PageNotFoundComponent,
    UserCartComponent,
    ItemDetailComponent,
    CartValueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
