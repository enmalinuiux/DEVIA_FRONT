import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreHomeComponent } from './pages/store/store-home/store-home.component';

const routes: Routes = [
  {
    path: 'store',
    component: StoreHomeComponent,
    children:[
      
    ]
  },
  {
    path: '',
    redirectTo: '/store',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
