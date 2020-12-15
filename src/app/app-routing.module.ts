import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './pages/store/shopping-cart/shopping-cart.component';
import { StoreHomeComponent } from './pages/store/store-home/store-home.component';

const routes: Routes = [
  {
    path: 'store',
    component: StoreHomeComponent
  },
  {
    path: 'store/shopping-cart',
    component: ShoppingCartComponent
  },
  {
    path: '',
    redirectTo: 'store',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'store',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
