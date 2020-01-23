import { ItemDetailComponent } from './item-detail/item-detail.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent, pathMatch: "full"},
  {path: "usercart", component: UserCartComponent},
  {path: "itemDetail/:item_id", component: ItemDetailComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
